import { useContext } from "react";
import { AuthContext } from "../routes/AuthProvider";


const useAuth = () => {
    const userInfo = useContext(AuthContext)
    return userInfo
};

export default useAuth;