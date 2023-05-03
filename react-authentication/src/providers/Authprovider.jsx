import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null);
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

const googleSignIn=()=>{
   return signInWithPopup(auth,googleprovider)
}
const githubSignIn=()=>{
   return signInWithPopup(auth,githubprovider)
}

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut=()=>{
        return signOut(auth);
    }
    //observer state changed
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
    },[])

const authInfo={
   user,
createUser,
signIn,
logOut,
googleSignIn,
githubSignIn,

}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;