import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="mb-4">
            <Helmet>
                <title>MedShop | Cart</title>
            </Helmet>
            <h1 className="text-2xl text-center max-w-60 mx-auto py-2 rounded mb-2 bg-gradient-to-r from-[#b2e0e2] via-[#92cccf] to-[#6ab1b3] text-white animate__animated animate__bounce">--- Your Cart ---</h1>
            <div className="flex justify-around items-center mb-2">
                <h2 className="lg:text-xl">Item: {cart.length}</h2>
                <h2 className="lg:text-xl">Total Price: {totalPrice} tk</h2>
                {
                    cart.length ? <Link to="/checkout">
                        <button className="py-[6px] px-3 rounded-md bg-accent text-white">Checkout</button>
                    </Link> :
                        <button disabled className="py-[6px] px-3 rounded-md bg-accent text-white">Checkout</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full border-collapse border table-xs">
                    {/* head */}
                    <thead>
                        <tr className="bg-gradient-to-r from-[#b2e0e2] via-[#92cccf] to-[#6ab1b3] text-white text-sm">
                            <th>
                                SL No.
                            </th>
                            <th className="text-center p-3">Name</th>
                            <th className="text-center">Company Name</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td className="text-center">
                                    {item.name}
                                </td>
                                <td className="text-center">
                                    {item.company}
                                </td>
                                <td className="text-center">{item.quantity}</td>
                                <td className="text-center">{item.price} tk</td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="p-2">
                                        <FaTrashAlt className="text-red-600 text-lg"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;