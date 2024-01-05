import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  // console.log(item);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [refetch] = useCart();
  const [loading, setLoading] = useState(false);


  const handleAddToCart = async() => {
    setLoading(true);
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price
      };
      console.log(cartItem);
      axiosSecure.post(`/cart`, cartItem).then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          setLoading(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${cartItem.name} added to the cart successfully!`,
            showConfirmButton: false,
            timer: 2000,
          });
          //call refetch to update the cart items
          refetch()
        }
      });
    } else{
     
      Swal.fire({
        title: "Log in required",
        text: "You should login before adding to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#D1A054B2",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in",
      }).then((result) => {
        if (result.isConfirmed) {
          setLoading(false);
          navigate("/login", { state: { from: location } });
        }
      });
    }
    await refetch();
  };
  return (
    <div className="bg-gray-200 pb-6 rounded-md drop-shadow-lg flex flex-col justify-between">
      <div>
        <figure className="h-[200px]">
          <img src={item?.image} className="w-full rounded-t-md h-full" alt="" />
          <p className="absolute top-2 right-2 text-white bg-black rounded-md w-it px-4 py-1">
            ${item?.price}
          </p>
        </figure>
        <div className="my-6 mx-6 text-center">
          <h1 className="text-[24px] font-bold text-gray-700">{item?.name}</h1>
          <p className="text-gray-500 h-[70px]">{item?.recipe && item.recipe.length>70 ? `${item.recipe.substring(0,70)}...` : item.recipe  }</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={handleAddToCart}
          className="btn bg-gray-300 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#BB8506] hover:border-b-[#BB8506] text-[#BB8506] hover:text-[#BB8506] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold"
        >
          {loading ? <span className="loading loading-dots loading-lg"></span> : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};


FoodCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Add other properties as needed
  }).isRequired,
};

export default FoodCard;
