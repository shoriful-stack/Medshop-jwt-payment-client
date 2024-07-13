import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const MedicinesCard = ({ medicines }) => {
    const { category, image, quantity } = medicines;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Link to={`/categoryWise/${category}`}>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img
                    className="object-cover w-full h-56"
                    src={image}
                    alt="avatar"
                />

                <div className="py-5 text-center bg-[#4ecdc4]">
                    <p className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">
                        {category}
                    </p>
                    <span className="text-sm text-gray-700 dark:text-gray-200">Available: {quantity}</span>
                </div>
            </div>
        </Link >
    );
};

export default MedicinesCard;