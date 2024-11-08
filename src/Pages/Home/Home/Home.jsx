import 'animate.css';
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
            <div className="lg:mt-12 p-2">
                <h1 className="lg:text-3xl text-xl font-bold text-center lg:mb-8 my-2 lg:w-[500px] max-w-96 mx-auto animate__animated animate__bounce"><span className="lg:text-5xl text-3xl text-[#4ecdc4]">Top Picks</span> in each Medicine Category</h1>
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
            <div className="grid lg:grid-cols-2 gap-6 mt-3 mb-5 lg:mt-12 lg:mb-20 p-2">
                {/* pharma */}
                <div className="rounded-xl bg-[linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url(https://i.ibb.co/t325SVM/premium-photo-1668487826818-d7092d28b617.jpg)] bg-no-repeat bg-cover h-[338px]" data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="lg:pt-32 pt-12 space-y-3 px-8">
                        <h3 className="text-4xl font-extrabold text-white">Pharma Products</h3>
                        <p className="text-white">At our medicine shop, we offer a comprehensive selection of pharma products, including prescription medications, over-the-counter drugs, and health supplements to cater to diverse health needs.We ensure all our products are sourced from trusted pharmaceutical companies, guaranteeing their quality and effectiveness.</p>
                    </div>
                </div>
                {/* expert */}
                <div className="rounded-xl bg-[linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.2)),url(https://i.ibb.co/qFxpB1q/360-F-260040900-o-O6-YW1s-HTn-Kxby4-Gcj-Cvtyp-UCWjn-QRg5.jpg)] bg-no-repeat bg-cover col-span-1 h-[338px] p-2" data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="lg:pt-32 pt-12 space-y-3 px-8">
                        <h3 className="text-4xl font-extrabold text-white">Rated By Expert</h3>
                        <p className="text-white">Our medicine shop consistently receives high expert ratings for its extensive range of quality pharmaceutical products, knowledgeable staff, and exceptional customer service. Experts particularly commend our commitment to sourcing medications from reputable manufacturers and maintaining strict quality control standards.</p>
                    </div>
                </div>
            </div>
            {/* Health Tips & Advice Section */}
            <div className="mb-3 lg:mb-12">
                <div className="bg-gradient-to-r from-[#b2e0e2] via-[#92cccf] to-[#6ab1b3] py-12">
                    <h2 className="lg:text-5xl text-3xl font-bold text-center mb-8 dark:text-black">Health Tips <span className="text-[#4ecdc4] lg:text-6xl text-4xl">&</span> Advice</h2>
                    <div className="max-w-6xl mx-auto space-y-6 px-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">
                            <h3 className="lg:text-2xl text-[22px] font-bold mb-4 dark:text-black">Staying Hydrated</h3>
                            <p className="text-gray-700">
                                Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Staying hydrated also improves sleep quality, cognition, and mood.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">
                            <h3 className="lg:text-2xl text-[22px] font-bold mb-4 dark:text-black">Healthy Eating</h3>
                            <p className="text-gray-700">
                                Eating a balanced diet that includes a variety of fruits, vegetables, lean proteins, and whole grains can help maintain a healthy weight, reduce the risk of chronic diseases, and promote overall health. Remember to limit processed foods and sugary drinks.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg dark:text-black" data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">
                            <h3 className="lg:text-2xl text-[22px] font-bold mb-4">Regular Exercise</h3>
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