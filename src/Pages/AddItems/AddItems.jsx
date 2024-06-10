import { useForm } from "react-hook-form";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosCommon = useAxiosCommon();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosCommon.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const addItem = {
                name: data.name,
                category: data.category,
                price_per_unit: parseInt(data.price_per_unit),
                description: data.description,
                company: data.company,
                quantity: parseInt(data.quantity),
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.post('/medicine', addItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };
    return (
        <div>
            <h1 className="text-center font-bold lg:text-4xl text-2xl">Add a medicine</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-3">
                        <label className="label">
                            <span className="label-text"> Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register('category')}
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
                                placeholder="Price"
                                {...register('price_per_unit')}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                    {/* company and quantity */}
                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Company Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                {...register('company', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity"
                                {...register('quantity')}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn w-full bg-green-500 text-white">
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;