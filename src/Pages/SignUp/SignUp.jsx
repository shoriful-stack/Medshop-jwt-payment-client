import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaEye } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const axiosCommon = useAxiosCommon();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation system
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state;
    // password validation
    const passwordValidationRules = {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
            message: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
        },
    };

    const onSubmit = async(data) => {
        try {
            // Image upload to imgbb and get URL
            const imageFile = data.image[0];
            const formData = new FormData();
            formData.append('image', imageFile);

            const response = await axiosCommon.post(image_hosting_api, formData, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            });

            const imageUrl = response.data.data.url;

            // Create user and update profile
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;

            await updateUserProfile(data.name, imageUrl);

            // Create user entry in the database
            const userInfo = {
                name: data.name,
                email: data.email,
                photoURL: imageUrl,
                role: data.role
            };

            const res = await axiosCommon.post("/users", userInfo);
            if (res.data.insertedId) {
                reset();
                toast.success("Registration successful");
                navigate(form);
            }
        } catch (error) {
            console.error(error);
            toast.error("Registration failed");
        }
    }
    return (
        <div className="py-10 mb-10">
            <h2 className="text-5xl font-bold text-center font-serif mb-[-50px]">Please Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Role</span>
                    </label>
                    <select defaultValue="default" {...register('role', { required: true })}
                        className="select select-bordered w-full">
                        <option disabled value="default">Select a role</option>
                        <option value="user">user</option>
                        <option value="seller">seller</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                </div>
                {errors.email && <span className="text-red-500">This field is required</span>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="join">
                        <input type={showPassword ? 'text' : 'password'} placeholder="password" name="password" className="w-full input input-bordered" {...register("password", passwordValidationRules)} />
                        <FaEye className="my-auto -ml-8" onClick={() => setShowPassword(!showPassword)} />
                    </div>
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#008080] text-white">Register</button>
                </div>
                <p className="text-center">Already have an account? <Link to='/login'><span className="text-primary font-bold">Login</span></Link></p>
                <SocialLogin></SocialLogin>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;