"use client";
import { app, auth } from "@/app/lib/firebase.config";
import { FirebaseError } from "firebase/app";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useReducer, useContext, createContext, useEffect } from "react";
/*
 * type declarations for the auth provider
 */
type signUp = {
  firstname: string;
  email: string;
  password: string;
};
type state = { user: User | null; message: string; getStartedEmail: string };
type action = {
  type: "Login" | "Logout" | "Error" | "Get Email";
  payload: string | User;
};
export type authContext = state & {
  logIn: (signInDetails: Omit<signUp, "firstname">) => Promise<void>;
  signUp: (signUpDetails: signUp) => Promise<void>;
  logOut: () => Promise<void>;
  getEmail: (email: string) => void;
};
/*
 * reducer function that handles state updates
 */
function reducer(state: state, action: action) {
  switch (action.type) {
    case "Login":
      return { ...state, user: action.payload as User };
    case "Logout":
      return { ...state, user: null };
    case "Error":
      return { ...state, message: action.payload as string };
    case "Get Email":
      return { ...state, getStartedEmail: action.payload as string };
    default:
      return state;
  }
}
const AuthContext = createContext<authContext | null>(null);
export const useAuth = () => useContext(AuthContext);
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    message: "",
    getStartedEmail: "",
  });
  useEffect(() => {
    /* 
            useEffect persists the login state for the child components
            returns the unsubscribe function to clean up the useEffect
         */
    let unSubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        dispatch({ type: "Login", payload: user });
      } else {
        dispatch({ type: "Logout", payload: "" });
      }
    });
    return unSubscribe();
  },[]);
  async function signUp(signUpDetails: signUp) {
    const { email, password } = signUpDetails;
    try {
      let cred = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: "Login", payload: cred.user });
    } catch (err) {
      dispatch({ type: "Error", payload: err?.message as unknown as string });
    }
  }
  async function logIn(signInDetails: Omit<signUp, "firstname">) {
    const { email, password } = signInDetails;
    try {
      let cred = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "Login", payload: cred.user });
    } catch (err) {
      dispatch({ type: "Error", payload: err?.message as unknown as string });
    }
  }
  async function logOut() {
    try {
      let signedOut = await signOut(auth);
    } catch (err) {
      dispatch({ type: "Error", payload: err?.message as unknown as string });
    }
  }
  function getEmail(email: string) {
    dispatch({ type: "Get Email", payload: email });
  }
  return (
    <AuthContext.Provider value={{ ...state, signUp, logIn, logOut, getEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
