"use client";
import db, { auth,app } from "@/app/lib/firebase.config";
import { IUser, urlString } from "@/app/types/";
import { randNum } from "@/app/utils";
import { addDoc, collection } from "@firebase/firestore";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import React, { useReducer, useContext, createContext, useEffect } from "react";
/*
 * type declarations for the auth provider
 */
export type signUp = {
  firstname: string;
  email: string;
  password: string;
};
type state = {
  user: User | null;
  message: string;
  getStartedEmail: string;
  loading: boolean;
};
type action = {
  type: "Login" | "Logout" | "Error" | "Get Email"|"Loading";
  payload: string | User | boolean;
};
export type authContext = state & {
  logIn: (signInDetails: Omit<signUp, "firstname">) => Promise<void>;
  signUp: (signUpDetails: signUp) => Promise<void>;
  logOut: () => Promise<void>;
  getEmail: (email: string) => void;
  googleSignIn: () => Promise<void>;
  dispatch:React.Dispatch<action>;
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
    case "Loading":
            return { ...state, loading: action.payload as boolean };
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
    loading:false
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
  }, []);
  async function signUp(signUpDetails: signUp) {
    const { firstname, email, password } = signUpDetails;
    try {
      let cred = await createUserWithEmailAndPassword(auth, email, password);
      const user: IUser = {
        uid: cred.user.uid,
        email,
        firstname,
        profile: [
          {
            username: firstname,
            photoUrl: randNum(10).toString() as urlString,
          },
        ],
        provider: "local",
      };
      const docRef = await addDoc(collection(db, "users"), user);
      dispatch({ type: "Login", payload: cred.user });
    } catch (err) {
      dispatch({ type: "Error", payload: err?.message as unknown as string });
    }
     finally{
       dispatch({ type: "Loading", payload: false });
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
     finally{
       dispatch({ type: "Loading", payload: false });
    }
  }
  async function googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      let cred = await signInWithPopup(auth, provider);

      // Create a query to check if  the user exists in our  collection.
      const q = query(
        collection(db, "users"),
        where("uid", "==", cred.user.uid)
      );
      const doc = await getDocs(q);
      if (doc.docs.length) return;
      // Create a user profile object
      const user: IUser = {
        uid: cred.user.uid,
        email: cred.user.email || "no email",
        firstname: cred.user.displayName || "add a name",
        provider: "google",
        profile: [
          {
            photoUrl: randNum(10).toString() as urlString,
            username: cred.user.displayName || "add a name",
          },
        ],
      };
      const docRef = await addDoc(collection(db, "users"), user);
      // login the user
      dispatch({ type: "Login", payload: cred.user });
    } catch (err) {
      dispatch({ type: "Error", payload: err?.message as unknown as string });
    }
    finally{
       dispatch({ type: "Loading", payload: false });
    }
  }
  async function logOut() {
    try {
      let signedOut = await signOut(auth);
    } catch (err) {
      dispatch({ type: "Error", payload: err?.message as unknown as string });
    }
     finally{
       dispatch({ type: "Loading", payload: false });
    }
  }
  function getEmail(email: string) {
    dispatch({ type: "Get Email", payload: email });
  }
  return (
    <AuthContext.Provider
      value={{ ...state, signUp, logIn, logOut, getEmail, googleSignIn,dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
