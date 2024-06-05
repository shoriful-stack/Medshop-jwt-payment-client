import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const { googleLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from, { replace: true });
                }
            })
    }
    return (
        <>
            <div className="divider">or</div>
            <div className="w-full">
                <button onClick={() => handleSocialLogin(googleLogin)} className="flex justify-center items-center border-4 gap-4 border-[#008080] py-2 px-6 rounded-xl w-full"><img className="w-10 h-10" src="https://i.ibb.co/MM1PdX8/google-lens-icon-logo-symbol-free-png.webp" alt="" /><span className="text-xl font-semibold">Continue with Google</span></button>
            </div>
        </>
    );
};

export default SocialLogin;