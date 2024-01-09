// import PropTypes from 'prop-types';

import Swal from "sweetalert2";
import Title from "../../../Components/Title/Title";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const [loading, setLoading] = useState(false);
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete!",
      text: "You will not able to retrieve it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    })
      .then((result) => {
        if (result.isConfirmed) {
          setLoading(true);
          console.log("Delete itemId req: ", id);
          axiosSecure.delete(`/cart/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              setLoading(false);
              refetch();
            }
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Can not Delete!",
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="bg-gray-100 md:px-2 lg:px-[100px] lg:py-4 min-h-screen max-w-[100vw]">
      <Link to="/order/salad">
        <Title heading="WANNA ADD MORE?" subHeading="My Cart"></Title>
      </Link>
      <div className="bg-white rounded-lg md:p-12 pt-6 overflow=x-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <h1 className="text-lg md:text-2xl font-bold uppercase">
              Total orders: {cart.length}
            </h1>
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-bold uppercase">
              Total Price: ${totalPrice}
            </h1>
          </div>
          <div>
            <Link to="/dashboard/payment">
            <button disabled={!cart.length} className="bg-[#D1A054] hover: bg-[#D1A054] text-white font-semibold px-4 py-2 rounded-lg">
              Pay
            </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-lg">
              <tr className="text-lg">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>ITEM NAME</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td className="font-bold">{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask rounded-md w-12 h-12">
                        <img
                          className="border-[3px] border-[#D1A054] rounded-lg"
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-500 text-lg font-semibold">
                    {item?.name}
                  </td>
                  <td className="text-gray-500 font-semibold">
                    ${item?.price}
                  </td>
                  <th className="flex justify-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 rounded-md p-2"
                    >
                      {loading ? (
                        <span className="loading loading-spinner text-error"></span>
                      ) : (
                        <RiDeleteBin5Fill className="text-white text-xl" />
                      )}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
