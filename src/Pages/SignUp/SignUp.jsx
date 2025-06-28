import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { toast } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "@/Hooks/useAuth";
import useAxiosCommon from "@/Hooks/useAxiosCommon";

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
    setValue,
    formState: { errors },
  } = useForm();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();

  // password validation
  const passwordValidationRules = {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
    },
  };

  const onSubmit = async (data) => {
    try {
      // Image upload to imgbb and get URL
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axiosCommon.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
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
        role: data.role,
      };

      const res = await axiosCommon.post("/users", userInfo);

      if (res.data.insertedId) {
        reset();
        toast.success("Registration successful!");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="md:w-2/4 lg:w-2/6 w-[91%] mx-auto border border-gray-300 rounded-lg">
      <h2 className="lg:text-4xl text-3xl font-bold text-center font-serif my-6">
        Please Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:px-12 lg:pb-8 px-4 pb-6">
        <div className="space-y-1">
          <Label htmlFor="name">
            <span>Full Name</span>
          </Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="role">
            <span>Role</span>
          </Label>
          <Select onValueChange={(value) => setValue("role", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">user</SelectItem>
              <SelectItem value="seller">seller</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" {...register("role", { required: true })} />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">
            <span>Email</span>
          </Label>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}

        <div className="space-y-1">
          <Label htmlFor="password">
            <span>Password</span>
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="w-full pr-10"
              {...register("password", passwordValidationRules)}
            />
            <Eye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer h-4 w-4"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <div className="space-y-1 mt-4">
          <div className="w-full">
            <Input
              {...register("image", { required: true })}
              type="file"
              className="w-full"
              accept="image/*"
            />
          </div>
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="my-2">
          <Button className="w-full bg-[#008080] text-white hover:bg-[#008080]/90">
            Register
          </Button>
        </div>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-600 font-bold">Login</span>
          </Link>
        </p>

        <SocialLogin />
      </form>
    </div>
  );
};

export default SignUp;
