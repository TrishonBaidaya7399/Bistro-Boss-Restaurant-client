// import PropTypes from 'prop-types';
import Title from "../../../Components/Title/Title";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const ManageItems = () => {
  const loading = false;
  const [menu] = useMenu();
  return (
    <div className="bg-gray-100 lg:px-[100px] lg:py-4 min-h-screen">
        <Title heading="MANAGE ALL ITEMS" subHeading="Hurry Up!"></Title>
      <div className="bg-white rounded-lg p-12">
        <div className="">
          <div>
            <h1 className="text-2xl font-bold uppercase mb-3">
              Total items: {menu.length}
            </h1>
          </div>
        </div>
        <div className="overflow-x-auto  h-[60vh] shadow-lg border-[3px] border-[#D1A054] rounded-lg drop-shadow-xl">
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
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-md border-2 border-[#D1A054] w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-lg font-semibold">{item.name}</td>
                  <td className="text-md font-semibold">${item.price}</td>
                  <th>
                    <button
                      className="rounded-md p-2 bg-[#D1A054] w-fit"
                    >
                      <FaEdit className="text-xl text-white" />
                    </button>
                  </th>
                  <th>
                    <button className="bg-red-600 rounded-md p-2">
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

ManageItems.propTypes = {};

export default ManageItems;
