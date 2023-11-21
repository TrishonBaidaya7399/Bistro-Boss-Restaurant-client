// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDropbox, FaUsers, FaWallet } from "react-icons/fa";
import { TbTruckDelivery  } from "react-icons/tb";
import { useState } from "react";

const AdminHome =() => {
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {data:stats}= useQuery({
        queryKey: ["admin-stats"],
        queryFn: async()=>{
            const result = await axiosSecure.get("/admin-stats")
            setLoading(false);
            return result.data;
        }
    })
    {
        !loading && 
        console.log(stats);
    }
    return (
        <div className="lg:m-10">
            <h1 className="text-3xl font-bold">
                Hi! Welcome Back <span>{user?.displayName}</span>
            </h1>
            <div className="flex gap-4 mt-4">
                <div className="rounded-lg bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] flex items-center justify-center px-8 py-4 gap-2 border-r-[#FCDBFF]">
                        <FaWallet className="text-4xl text-white"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-white font-bold">${stats?.revenue}</h1>
                        <h1 className="text-white font-bold">Revenue</h1>
                    </div>
                    
                </div>
                <div className="rounded-lg bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] flex items-center justify-center px-8 py-4 gap-2 border-r-[#FDE8C0]">
                        <FaUsers className="text-4xl text-white"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-white font-bold">{stats?.customers}</h1>
                        <h1 className="text-white font-bold">Customers</h1>
                    </div>
                    
                </div>
                <div className="rounded-lg bg-gradient-to-r from-[#FE4880] to-[#FECDE9] flex items-center justify-center px-8 py-4 gap-2 border-r-[#FECDE9]">
                        <FaDropbox className="text-4xl text-white"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-white font-bold">{stats?.products}</h1>
                        <h1 className="text-white font-bold">Products</h1>
                    </div>
                    
                </div>
                <div className="rounded-lg bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] flex items-center justify-center px-8 py-4 gap-2 border-r-[#B6F7FF]">
                        <TbTruckDelivery className="text-4xl text-white"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-white font-bold">{stats?.orders}</h1>
                        <h1 className="text-white font-bold">Orders</h1>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

AdminHome.propTypes = {
    
};

export default AdminHome;