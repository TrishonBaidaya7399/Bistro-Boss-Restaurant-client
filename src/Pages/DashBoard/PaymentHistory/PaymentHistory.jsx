// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const token = localStorage.getItem("accessToken");
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const { data: payments } = useQuery({
      queryKey: ["payments", user.email],
      enabled: !!user?.email && !!token, // must keep this
      queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div className="bg-gray-100  px-2 lg:px-[50px] lg:py-4 max-h-screen max-w-[100vw] overflow-x-hidden">
      <div className="bg-white rounded-lg p-6 mt-12">
        <div className="">
          <div>
            <h1 className="text-2xl font-bold uppercase">
              Total Payments: {payments?.length}
            </h1>
          </div>
        </div>
        <div className="overflow-x-auto lg:overflow-x-hidden mt-6 rounded-lg drop-shadow-xl h-[80vh] overflow-y-auto border-[5px] border-[#D1A054] rounded-lg">
          <table className="table w-full fix">
            {/* head */}
            <thead className="bg-[#D1A054] text-white rounded-lg">
              <tr className="text-lg">
                <th>Email</th>
                <th>TRANSACTION ID</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody className="">
              {payments?.map((payment, index) => (
                <tr key={index} className="border-b-2 border-[#D1A054]">
                  <td className="text-gray-500 font-semibold">{payment?.email}</td>
                  <td className="text-gray-500 font-semibold">{payment?.transactionId}</td>
                  <td className="text-gray-500 font-semibold text-center">${payment?.price}</td>
                  <td className="text-gray-500 font-semibold">{new Date(payment?.date).toLocaleDateString()} - {new Date(payment?.date).toLocaleTimeString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

PaymentHistory.propTypes = {};

export default PaymentHistory;
