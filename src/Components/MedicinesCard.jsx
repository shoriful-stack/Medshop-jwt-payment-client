import { Link } from "react-router-dom";


const MedicinesCard = ({ medicines }) => {
    const { category, image, quantity } = medicines;
    return (
        <Link to={`/categoryWise/${category}`}>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img
                    className="object-cover w-full h-56"
                    src={image}
                    alt="avatar"
                />

                <div className="py-5 text-center">
                    <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabIndex="0" role="link">
                        {category}
                    </a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">Available: {quantity}</span>
                </div>
            </div>
        </Link>
    );
};

export default MedicinesCard;