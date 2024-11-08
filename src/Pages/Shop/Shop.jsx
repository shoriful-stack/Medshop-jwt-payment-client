import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import MedicineModal from "../../Components/MedicineModal";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const Shop = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart();

    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: medicine = [], isLoading } = useQuery({
        queryKey: ["medicine"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/medicine")
            return data
        }
    })

    const handleViewDetails = (medicine) => {
        setSelectedMedicine(medicine);
        setIsModalOpen(true);
    };

    const handleAddToCart = (medicine) => {
        const cartItem = {
            medicineId: medicine._id,
            email: user.email,
            name: medicine.name,
            price: medicine.price_per_unit,
            quantity: medicine.quantity,
            image: medicine.image,
            company: medicine.company,
            category: medicine.category,
            description: medicine.description,
        }
        axiosSecure.post("/carts", cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${medicine.name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the count
                    refetch();
                }
            })
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMedicine(null);
    };

    if (isLoading) return <div className="text-5xl text-center font-bold flex justify-center items-center min-h-96">Loading<span className="loading loading-dots loading-lg"></span></div>;
    return (
        <div className="lg:mt-28 lg:mb-12 my-24">
            <Helmet>
                <title>MedShop | Shop</title>
            </Helmet>
            <div className="overflow-x-auto">
                <h1 className="text-2xl text-center max-w-60 mx-auto py-2 rounded mb-3 bg-gradient-to-r from-[#b2e0e2] via-[#92cccf] to-[#6ab1b3] text-white animate__animated animate__bounce">--- All Medicines ---</h1>
                <table className="table w-full border-collapse border table-xs">
                    {/* head */}
                    <thead>
                        <tr className="bg-gradient-to-r from-[#b2e0e2] via-[#92cccf] to-[#6ab1b3] text-white text-sm">
                            <th>
                                SL No.
                            </th>
                            <th className="text-center p-3">Image</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicine.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td className="text-center">
                                    <div className="">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    {item.name}
                                </td>
                                <td className="text-center">{item.price_per_unit} tk</td>
                                <td className="text-center">
                                    <button onClick={() => handleViewDetails(item)}
                                        className="ml-4 text-blue-700">
                                        <FaEye size={24}></FaEye>
                                    </button>
                                    <button onClick={() => handleAddToCart(item)}
                                        className="ml-4">
                                        <MdOutlineShoppingCartCheckout size={28} className="text-[#008080]"></MdOutlineShoppingCartCheckout>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Medicine Modal */}
            <MedicineModal isOpen={isModalOpen} onClose={closeModal} medicine={selectedMedicine} />
        </div>
    );
};

export default Shop;