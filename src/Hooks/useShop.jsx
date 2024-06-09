import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useShop = () => {
    const axiosCommon = useAxiosCommon();
    const { data: medicine = [], isPending: loading, refetch } = useQuery({
        queryKey: ['medicine'],
        queryFn: async () => {
            const res = await axiosCommon.get('/medicine');
            return res.data;
        }
    })


    return [medicine, loading, refetch]
};

export default useShop;