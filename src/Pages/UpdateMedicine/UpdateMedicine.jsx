import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";


const UpdateMedicine = () => {
    const medicine = useLoaderData();
    const { name, category, price_per_unit, _id, description, image } = medicine;

    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        try {
            const updateItem = {
                name: data.name,
                category: data.category,
                price_per_unit: parseInt(data.price_per_unit),
                image: data.image,
                description: data.description
            };

            const menuRes = await axiosSecure.patch(`/medicines/${_id}`, updateItem);
            if (menuRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `Failed to update ${data.name}.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error updating medicine:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `An error occurred while updating ${data.name}.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div>
            <h1 className="text-center text-2xl lg:text-4xl font-bold">Update</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Name"
                            {...register('name')}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"  defaultValue={image} {...register("image")} placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category')}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Capsule">Capsule</option>
                                <option value="Syrup">Syrup</option>
                                <option value="Injection">Injection</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price_per_unit}
                                placeholder="Price"
                                {...register('price_per_unit')}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <button className="btn bg-green-500 text-white w-full">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMedicine;