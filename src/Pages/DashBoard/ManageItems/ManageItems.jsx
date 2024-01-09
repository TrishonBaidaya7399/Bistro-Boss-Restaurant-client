// import PropTypes from 'prop-types';
import Title from "../../../Components/Title/Title";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete!",
      text: "You will not able to retrieve the item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054B2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("Delete itemId req: ", id);
          axiosSecure.delete(`/menu/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Can not Delete!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="bg-gray-100 lg:px-[100px] lg:py-4 min-h-screen max-w-[100vw]">
      <Title heading="MANAGE ALL ITEMS" subHeading="Hurry Up!"></Title>
      <div className="bg-white rounded-lg p-2 md:p-12 mb-12">
        <div className="">
          <div>
            <h1 className="text-lg md:text-2xl font-bold uppercase mb-3">
              Total items: {menu.length}
            </h1>
          </div>
        </div>
        <div className="overflow-y-auto lg:overflow-x-hidden  h-[90vh] shadow-lg border-[3px] border-[#D1A054] rounded-lg drop-shadow-xl">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-lg">
              <tr className="text-lg">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={index} className="text-gray-500">
                  <td className="font-semibold text-lg text-right">
                    {index + 1}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-md border-2 border-[#D1A054] w-12 h-12 ml-8">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-lg font-semibold">{item.name}</td>
                  <td className="text-md font-semibold">${item.price}</td>
                  <th>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="rounded-md p-2 bg-[#D1A054] w-fit">
                      <FaEdit className="text-xl text-white" />
                    </button>
                    </Link>
                  </th>
                  <th>
                    <button className="bg-red-600 rounded-md p-2">
                      {loading ? (
                        <span className="loading loading-spinner text-error"></span>
                      ) : (
                        <RiDeleteBin5Fill
                          onClick={() => handleDelete(item._id)}
                          className="text-white text-xl"
                        />
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

ManageItems.propTypes = {};

export default ManageItems;
