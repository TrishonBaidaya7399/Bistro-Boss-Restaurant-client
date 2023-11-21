// import PropTypes from 'prop-types';

// import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { loadStripe } from "@stripe/stripe-js";
import Title from "../../../Components/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div className='pt-12'>
      <Title
        heading={"MAKE YOUR PAYMENT"}
        subHeading={"Purchase your product"}
      ></Title>
      <div className="flex justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-8">PAYMENT</h1>
        </div>
      </div>
      <div className="mx-[200px]">
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
      </div>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;
