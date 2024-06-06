
import MedicinesCard from "../../../Components/MedicinesCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
    const axiosSecure = useAxiosSecure();
    const {data : medicines = [], isLoading} = useQuery({
        queryKey: ["medicine"],
        queryFn: async () => {
            const {data} = await axiosSecure.get("/medicine")
            return data
        }
    });
    const firstSixMedicines = medicines.slice(0, 6);
    if(isLoading) return <div className="text-5xl text-center font-bold flex justify-center items-center min-h-96">Loading<span className="loading loading-dots loading-lg"></span></div>;
    return (
        <div>
            <Helmet>
                <title>MedShop | Home</title>
            </Helmet>
            {/* category wise medicine */}
            <div className="lg:my-12 p-2">
            <h1 className="lg:text-5xl text-3xl font-bold text-center lg:mb-8 mb-2">Top Picks in Each Medicine <br /> Category</h1>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 lg:gap-8 gap-2 mb-12'>
                {
                    firstSixMedicines.map(medicines => <MedicinesCard
                        key={medicines._id}
                        medicines={medicines}
                    ></MedicinesCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;