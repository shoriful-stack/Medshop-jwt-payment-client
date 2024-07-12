
import MedicinesCard from "../../../Components/MedicinesCard";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Discount from "./Discount";
import Carousel from "../../../Components/Carousel";


const Home = () => {
    const axiosSecure = useAxiosSecure();
    const { data: medicines = [], isLoading } = useQuery({
        queryKey: ["medicine"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/medicine")
            return data
        }
    });
    const firstSixMedicines = medicines.slice(0, 6);
    if (isLoading) return <div className="text-5xl text-center font-bold flex justify-center items-center min-h-96">Loading<span className="loading loading-dots loading-lg"></span></div>;
    return (
        <div>
            <Helmet>
                <title>MedShop | Home</title>
            </Helmet>
            <div className="">
                <Carousel></Carousel>
            </div>
            {/* category wise medicine */}
            <div className="lg:my-12 p-2">
                <h1 className="lg:text-5xl text-3xl font-bold text-center lg:mb-8 my-2 lg:w-[500px] mx-auto">Top Picks in Each Medicine Category</h1>
                <div className='grid lg:grid-cols-3  md:grid-cols-2 lg:gap-8 gap-2 mb-12'>
                    {
                        firstSixMedicines.map(medicines => <MedicinesCard
                            key={medicines._id}
                            medicines={medicines}
                        ></MedicinesCard>)
                    }
                </div>
            </div>
            {/* discount medicines */}
            <Discount></Discount>
            {/* My section */}
            <div className="grid lg:grid-cols-2 gap-6 mb-3 lg:my-12 p-2">
                {/* pharma */}
                <div className="rounded-xl bg-[linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url(https://i.ibb.co/t325SVM/premium-photo-1668487826818-d7092d28b617.jpg)] bg-no-repeat bg-cover h-[338px]">
                    <div className="lg:pt-32 pt-12 space-y-3 px-8">
                        <h3 className="text-4xl font-extrabold text-white">Pharma Products</h3>
                        <p className="text-white">At our medicine shop, we offer a comprehensive selection of pharma products, including prescription medications, over-the-counter drugs, and health supplements to cater to diverse health needs.We ensure all our products are sourced from trusted pharmaceutical companies, guaranteeing their quality and effectiveness.</p>
                    </div>
                </div>
                {/* expert */}
                <div className="rounded-xl bg-[linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url(https://i.ibb.co/qFxpB1q/360-F-260040900-o-O6-YW1s-HTn-Kxby4-Gcj-Cvtyp-UCWjn-QRg5.jpg)] bg-no-repeat bg-cover col-span-1 h-[338px] p-2">
                    <div className="lg:pt-32 pt-12 space-y-3 px-8">
                        <h3 className="text-4xl font-extrabold text-white">Rated By Expert</h3>
                        <p className="text-white">Our medicine shop consistently receives high expert ratings for its extensive range of quality pharmaceutical products, knowledgeable staff, and exceptional customer service. Experts particularly commend our commitment to sourcing medications from reputable manufacturers and maintaining strict quality control standards.</p>
                    </div>
                </div>
            </div>
            {/* Health Tips & Advice Section */}
            <div className="mb-3 lg:mb-12">
                <div className="bg-gray-100 py-12">
                    <h2 className="text-4xl font-bold text-center mb-8">Health Tips & Advice</h2>
                    <div className="max-w-6xl mx-auto space-y-6 px-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Staying Hydrated</h3>
                            <p className="text-gray-700">
                                Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Staying hydrated also improves sleep quality, cognition, and mood.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Healthy Eating</h3>
                            <p className="text-gray-700">
                                Eating a balanced diet that includes a variety of fruits, vegetables, lean proteins, and whole grains can help maintain a healthy weight, reduce the risk of chronic diseases, and promote overall health. Remember to limit processed foods and sugary drinks.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Regular Exercise</h3>
                            <p className="text-gray-700">
                                Regular physical activity can improve muscle strength, boost endurance, and give you more energy. Exercise helps deliver oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. Aim for at least 30 minutes of moderate exercise most days of the week.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;