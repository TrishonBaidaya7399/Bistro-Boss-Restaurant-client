// import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import Title from "../../../Components/Title/Title";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(result.data.user._id);
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "ADMIN!",
              text: `${user.name}  is an Admin now`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete!",
      text: "You will not able to retrieve the user!",
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
          axiosSecure.delete(`/users/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
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
    <div className="bg-gray-100 lg:px-[100px] lg:py-4 min-h-screen max-w-[100vw]">
      <Link to="/order/salad">
        <Title heading="MANAGE ALL USERS" subHeading="How many?"></Title>
      </Link>
      <div className="bg-white rounded-lg p-2 lg:p-12 overflow-x-auto">
        <div className="">
          <div>
            <h1 className="text-lg md:text-2xl font-bold uppercase">
              Total Users: {users.length}
            </h1>
          </div>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-lg">
              <tr className="text-lg">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="font-bold">{index + 1}</td>
                  <td className="text-gray-500 text-lg font-semibold">
                    {user?.name}
                  </td>
                  <td className="text-gray-500 font-semibold">{user?.email}</td>
                  <td className="text-gray-500 font-semibold">
                    {user?.role === "admin" ? (
                      <div className="rounded-md p-2 bg-[#D1A054] w-fit">
                        <ImUserTie className="text-xl text-white" />
                      </div>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="rounded-md p-2 bg-[#D1A054] w-fit"
                      >
                        <FaUsers className="text-xl text-white" />
                      </button>
                    )}
                  </td>
                  <td className="flex justify-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-600 rounded-md p-2"
                    >
                      {loading ? (
                        <span className="loading loading-spinner text-error"></span>
                      ) : (
                        <RiDeleteBin5Fill className="text-white text-xl" />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

AllUsers.propTypes = {};

export default AllUsers;
