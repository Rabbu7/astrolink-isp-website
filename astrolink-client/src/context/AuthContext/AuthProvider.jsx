import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import auth from "../../firebase/firebase.init";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // Function to create a new user with email and password
  // It uses Firebase's createUserWithEmailAndPassword method.
  const createUser = (email, password) => {
    setLoading(true); // Set loading to true while creating user
    return createUserWithEmailAndPassword(auth, email, password); // This returns a promise

  };

  const signInUser = (email, password) => {
     setLoading(true);  // Set loading to true while signing in
     return signInWithEmailAndPassword(auth,email,password); // This returns a promise
  };

  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      console.log("state captured", currentUser)
      setLoading(false);
    })

    return () => {
      unSubscribe();
    }
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
