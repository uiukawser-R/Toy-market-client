import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext= createContext(null);
const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const googleProvider= new GoogleAuthProvider();

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }



    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
            setuser(loggedUser)
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])



    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;