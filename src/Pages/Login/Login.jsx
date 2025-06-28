import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Eye } from "lucide-react";
import { Button } from "@/Components/ui/button";

const Login = () => {
  const { loginUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
          toast.success("Login successful");
        } else {
          toast.error("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/wrong-password") {
          console.log("Incorrect password");
          toast.error("Incorrect password");
        } else if (error.code === "auth/user-not-found") {
          console.log("Email not found");
          toast.error("Email not found");
        } else {
          console.log("An error occurred. Please try again later.", error);
          toast.error("An error occurred. Please try again later.");
        }
      });
  };
  return (
    <div className="flex flex-col justify-around lg:flex-row lg:mb-4 lg:p-10 p-2">
      <div>
        <img
          className="lg:w-[650px] w-full h-full rounded-lg hidden lg:flex"
          src="https://i.ibb.co/zhhXNK0/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh.jpg"
          alt=""
        />
      </div>

      <div className="lg:w-[450px] border border-gray-300 rounded-lg">
        <div className="px-10 py-5">
          <h2 className="text-4xl font-bold text-center font-serif">
            Please Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mt-6">
              <Label htmlFor="email">
                <span>Email</span>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500">Email does not matched</span>
            )}

            <div className="space-y-2 mt-4">
              <Label htmlFor="password">
                <span>Password</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="w-full pr-10"
                  {...register("password")}
                  required
                />
                <Eye
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer h-4 w-4"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-[#4ecdc4] text-white hover:bg-[#4ecdc4]/90">
                Login
              </Button>
            </div>
          </form>

          <p className="text-center mt-4">
            Do not have an account?{" "}
            <Link to="/signUp">
              <span className="text-blue-600 font-bold">Sign Up</span>
            </Link>
          </p>

          <SocialLogin></SocialLogin>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
