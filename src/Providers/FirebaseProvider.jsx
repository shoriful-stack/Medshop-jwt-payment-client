import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosCommon from "../Hooks/useAxiosCommon";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const FirebaseProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosCommon = useAxiosCommon();


    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    // Login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logout = () => {
        setUser(null)
        signOut(auth)
    }
    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = {email: currentUser.email};
                axiosCommon.post("/jwt", userInfo)
                .then(res => {
                    if(res.data.token) {
                        localStorage.setItem("access-token", res.data.token);
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem("access-token");
                setLoading(false)
            }
        });
        return () => unsubscribe();
    }, [])

    const allValues = {
        createUser,
        loginUser,
        googleLogin,
        logout,
        updateUserProfile,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;