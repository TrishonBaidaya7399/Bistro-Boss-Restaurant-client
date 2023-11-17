// import PropTypes from 'prop-types';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
 const {data: cart=[], refetch} = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/cart?email=${user.email}`)
        return res.data
    }
 });
 return [cart, refetch]

};

useCart.propTypes = {};

export default useCart;
