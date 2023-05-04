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
const [loading,setloading]=useState(true)

    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    

const googleSignIn=()=>{
   return signInWithPopup(auth,googleprovider)
}
const githubSignIn=()=>{
   return signInWithPopup(auth,githubprovider)
}

    const signIn=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut=()=>{
        return signOut(auth);
    }
    //observer state changed
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setloading(false)
        })
        return ()=>{
            return unsubscribe;
        }
    },[])

// //update
//     const updateUserdata=(username,userphoto)=>{
//         return updateProfile(auth.currentUser, {
//          displayName: username, photoURL: userphoto,
//        })
//      }

const authInfo={
   user,
createUser,
signIn,
logOut,
googleSignIn,
githubSignIn,
loading,


}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;