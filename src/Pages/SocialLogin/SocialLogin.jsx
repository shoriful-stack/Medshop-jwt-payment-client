import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosCommon from "../../Hooks/useAxiosCommon";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const axiosCommon = useAxiosCommon();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL,
                    role: "user"
                }
                axiosCommon.post('/users', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        navigate(from, {replace: true});
                    })
            })
    }
    return (
        <>
            <div className="divider">or</div>
            <div className="w-full">
                <button onClick={() => handleSocialLogin(googleLogin)} className="flex justify-center items-center border-2 gap-2 py-[2px] px-6 rounded-xl w-full border-[#92cccf]"><img className="w-10 h-10" src="https://i.ibb.co/MM1PdX8/google-lens-icon-logo-symbol-free-png.webp" alt="" /><span className="text-lg font-medium text-black">Continue with Google</span></button>
            </div>
        </>
    );
};

export default SocialLogin;