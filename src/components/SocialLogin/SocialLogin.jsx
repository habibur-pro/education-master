import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import facebookIcon from '../../assets/icons/facebook.png'
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleLogin, facebookLogin, githubLogin } = useAuth()

    const handleGoogleLogin = () => {

    }
    return (
        <div className="flex justify-center gap-5">
            <div onClick={handleGoogleLogin} className="text-4xl hover:-translate-y-1 hover:shadow-xl duration-200 cursor-pointer rounded-full border p-2">
                <FcGoogle />
            </div>
            <div className="text-4xl  hover:-translate-y-1 hover:shadow-xl  duration-200 cursor-pointer rounded-full border p-2">
                <img className="w-9" src={facebookIcon} alt="" />
            </div>
            <div className="text-4xl hover:-translate-y-1 hover:shadow-xl  duration-200 cursor-pointer rounded-full border p-2">
                <FaGithub />
            </div>
        </div>
    );
};

export default SocialLogin;