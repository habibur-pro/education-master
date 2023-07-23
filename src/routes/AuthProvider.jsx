import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(false)


    // user create email with password 
    const registerEmailPassword = (email, password) => {
        setLoading(true)
        console.log('from prvider', email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login email with password 
    const loginEmailPassword = (email, password) => {
        console.log('from prvider', email, password)
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
    const githubLogin = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    }

    // logout 
    const logout = () => {
        return signOut(auth)
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
        githubLogin,
        logout,
        isLoading

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('current user', currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [user])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;