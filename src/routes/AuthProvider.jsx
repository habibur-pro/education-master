import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)


    // user create email with password 
    const registerEmailPassword = ({ email, password }) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login email with password 
    const loginEmailPassword = ({ email, password }) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with google 
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLogin = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
    }

    // updata profile 
    const updateUserProfile = (userName, userImage) => {
        // setLoading(true)

        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userImage
        })
    }


    const userInfo = {
        user,
        registerEmailPassword,
        loginEmailPassword,
        googleLogin,
        facebookLogin,
        updateUserProfile,
        isLoading

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])



    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;