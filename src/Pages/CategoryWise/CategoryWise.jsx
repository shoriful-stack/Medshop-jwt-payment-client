import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useState } from "react";
import MedicineModal from "../../Components/MedicineModal";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const CategoryWise = () => {
    const {user} = useAuth();
    const { category } = useParams();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: categoryWise = [], isLoading } = useQuery({
        queryKey: ["categoryWise", category],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`medicine/${category}`)
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
            category: medicine.category,
            description: medicine.description,
        }
        axiosSecure.post("/carts", cartItem)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
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
        <div className="lg:my-12 my-3">
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoryWise.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price_per_unit}</td>
                                <th>
                                    <button  onClick={() => handleViewDetails(item)}
                                        className="btn btn-ghost ml-[-30px] text-blue-700">
                                        <FaEye size={24}></FaEye>
                                    </button>
                                    <button onClick={() => handleAddToCart(item)}
                                        className="btn btn-ghost ml-[-10px]">
                                        <MdOutlineShoppingCartCheckout size={28} className="text-[#008080]"></MdOutlineShoppingCartCheckout>
                                    </button>
                                </th>
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

export default CategoryWise;