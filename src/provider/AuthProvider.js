"use client";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import app from "../../firebase.config";

const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const ProfileUpdate = (name, PhotoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: PhotoUrl,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // get and set token
      if (currentUser) {
        // console.log("data");
        axios
          .post("https://glamorex-server.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            setUser(currentUser);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setUser(currentUser);
            setLoading(false);
          });
      } else {
        console.log("logout successfully");
        localStorage.removeItem("access-token");
        setUser(currentUser);
        setLoading(false);
      }
      // setLoading(false);
      // setReload(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signUp,
    setUser,
    signInGoogle,
    signInGithub,
    login,
    logout,
    loading,
    ProfileUpdate,
    auth,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
