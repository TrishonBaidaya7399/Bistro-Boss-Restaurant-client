// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = ()=>{
    const axiosPublic = useAxiosPublic();
    const {data: menu=[], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosPublic.get("/menu")
            return res.data
        }
    })

    return [menu, loading, refetch];
}
export default useMenu;