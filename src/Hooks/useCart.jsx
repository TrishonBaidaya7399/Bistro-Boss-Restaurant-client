import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: cart = [], refetch, error } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/cart?email=${user.email}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching cart data:", error);
                throw error;
            }
        },
    });

    if (error) {
        console.error("Error in useCart hook:", error);
    }

    return [cart, refetch];
};

export default useCart;
