
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useShop from "../../../../Hooks/useShop";


const ManageCategories = () => {
    const axiosSecure = useAxiosSecure();
    const [medicine, loading, refetch] = useShop();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/medicine/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    if (loading) return <div className="text-5xl text-center font-bold flex justify-center items-center min-h-96">Loading<span className="loading loading-dots loading-lg"></span></div>;
    return (
        <div className="lg:my-12 my-3">
            <div className="text-center">
                <h1 className="lg:text-4xl text-2xl font-bold my-3 lg:mb-12">Manage Categories</h1>
            </div>
            <div className="flex justify-end">
                <Link to="/dashboard/addItems">
                    <button className="btn bg-green-500 text-white">Add Category</button>
                </Link>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                medicine.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
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
                                    <td>{item.price_per_unit} tk</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-sm bg-green-500">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCategories;