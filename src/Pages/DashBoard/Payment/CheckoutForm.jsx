// import PropTypes from 'prop-types';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import useCart from "../../../Hooks/useCart"
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const {user} = useContext(AuthContext);
  const [transactionId, setTransactionId]= useState("")
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item)=> total + item.price, 0)

  useEffect(()=>{
   if(totalPrice>0){
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res=> {
      console.log("ClientSecret: ",res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
   }
  },[axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setLoading(true);
    setTransactionId("");
    setError(null);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error);
      setLoading(false)
    } else {
        setError(null);
      console.log("[PaymentMethod]", paymentMethod);
    }
    //confirm payment
    const { paymentIntent, error: confirmationError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details: {
          email: user?.email || "ANONYMOUS",
          name: user?.displayName || "ANONYMOUS",
        }
      }
    })
    if(confirmationError){
      console.log("Confirm Error: ", confirmationError);
      setError(confirmationError)
      setLoading(false)
    }else{
      console.log("PaymentIntent: ", paymentIntent);
      if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id)
        console.log("Transaction Id: ", paymentIntent.id);
        setLoading(false);
        //now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //utc date convert -> use moment.js
          cartIds: cart.map(item=> item._id),
          menuItemIds: cart.map(item=> item.menuId),
          status: "Pending",
        }
        console.log(payment);
        const res  = await axiosSecure.post("/payments", payment)
        console.log("Payment saved: ",res.data);
        refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }

  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="my-2 text-lg font-semibold">To Pay: ${totalPrice}</h1>
      <div className="border-2 border-gray-400 rounded-lg p-2 mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "rgb(132, 124, 124)",
                "::placeholder": {
                  color: "rgb(132, 124, 124)",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <button
          className="btn bg-gradient-to-r hover:bg-gradient-to-l duration-200 from-[#835D23] to-[#B58130] text-lg font-bold text-white w-fit px-8 mt-2 rounded-md px-[100px]"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          {loading ? <span className="loading loading-dots loading-lg"></span> : "Pay"}
        </button>
        {transactionId && (
          <p className="bg-[transparent] text-lg font-bold text-green-600 w-fit mt-2 rounded-md px-[100px] border-2 border-green-600">
            Transaction id: {transactionId}
          </p>
        )}
        {error && (
          <p className="bg-[transparent] text-lg font-bold text-red-500 w-fit mt-2 rounded-md px-[100px] border-2 border-red-500">
            {error.message}
          </p>
        )}
      </div>
    </form>
  );
};

CheckoutForm.propTypes = {};

export default CheckoutForm;
