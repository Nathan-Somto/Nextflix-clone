"use client";
import { authContext, useAuth,signUp } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

type touched<Type> = {
  [Property in keyof Type]:boolean;
}
function SignIn({ signUpPage }: { signUpPage: boolean }) {
  const [data, setData] = useState<signUp>({ email: "", password: "", firstname: "" });
  const [touched, setTouched] = useState<touched<signUp>>({
    email: false,
    password: false,
    firstname: false,
  });
  const Route = useRouter();
  const { message, signUp, logIn, getStartedEmail, user,googleSignIn ,loading,dispatch} = useAuth() as authContext;
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({type:"Loading",payload:true});
    const { email, firstname, password } = data;
    if (signUpPage) {
        //sign up the specified user.
        await signUp({ firstname, email, password });
        console.log(user);
        //remove the sign up page from the history stack
        if(user){
        Route.replace(`/profile/${firstname}`);
        }
       
         if(!message){
        toast.error("failed to create account");
        return;
      }
        // use react toastify to display error
        toast.error(message);
         return;
  }
     
     
  
      await logIn({ email, password });
      if(user){
      Route.replace(`/profile/${user.displayName}`);
      }

      // use react toastify to display error
    
      if(!message){
        toast.error("failed to login");
        return;
      }
      toast.error(message);
   
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleGoogleAuth() {
       dispatch({type:"Loading",payload:true});
      await googleSignIn();
       if(user){
      Route.replace(`/profile/${user.displayName}`);
      return;
      }
      if(!message){
        toast.error("failed to login");
        return;
      }
      toast.error(message);
    
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (!signUpPage) return;
    if (e.target === null) return;
    console.log("blurred");
    console.log(e.target.name);
      setTouched({ ...touched, [e.target.name]: true });
     
   
  }
  function Validate(): signUp {
   
    let errors ={
      firstname:'',
      email:'',
      password:''
    }
   if(touched.email && !data.email){
      errors.email = "email cannot be empty";
   }
   if(touched.firstname && !data.firstname)
   {
      errors.firstname = "firstname cannot be empty";
   }
   if(touched.password && data.password.length <= 6)
   {
    errors.password ='password cannot be less than six characters';
   }
  
   return errors;
  }
  const errors = Validate();
  
  let disableForSignUp: boolean = (errors.email+ errors.password + errors.firstname).length !== 0;

  return (
    <>
      <ToastContainer position={"top-center"} theme={"colored"} />
      <motion.form
        initial={{ opacity:0, scale: 0.5 }}
        animate={{ opacity:1,x:'-50%',y:'-50%', scale: [0.5,0.5,0.6,0.7,0.7,1] }}
        transition={{
          type: "spring",
          ease: [0.21, 0.56, 0.14, 0.31],
          bounce:0.3,
          duration: 0.52,
        }}
        onSubmit={handleSubmit}
        className="bg-[rgba(0,0,0,0.81)] text-[#000] top-[50%] z-[10] left-[50%] absolute -translate-x-[50%] -translate-y-[50%] justify-center flex flex-col items-center space-y-4  rounded-xl px-5 py-1 h-[500px] max-[639px]:min-w-[300px] w-[70%] sm:w-[500px]"
      >
        <h3 className="font-semibold text-3xl absolute top-[8%] text-[#fff]">
          {signUpPage ? "Sign Up" : "Sign In"}
        </h3>
        {signUpPage && (
          <label htmlFor="firstname" className="w-[80%] mx-auto">
            <input
              type="text"
              placeholder="Firstname"
              id="firstname"
              name="firstname"
             
              className={`w-full py-5 px-6 rounded-md border-solid border h-[30px] ${
              errors.firstname
                ? "focus:border-[rgba(255,0,0)] border-[rgba(255,0,0)]"
                : "focus:border-[#ecedec] border-[#ecedec]"
            } `}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            
              <small className="text-[#be1818] text-sm font-bold">
               {errors.firstname}
              </small>
            
          </label>
        )}
        <label htmlFor="email" className="w-[80%] mx-auto">
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={getStartedEmail || data.email}
             className={`w-full py-5 px-6 rounded-md border-solid border h-[30px] ${
              errors.email
                ? "focus:border-[rgba(255,0,0)] border-[rgba(255,0,0)]"
                : "focus:border-[#ecedec] border-[#ecedec]"
            } `}
            onBlur={handleBlur}
            onChange={handleChange}
          />
       
            <small className="text-[#be1818] text-sm font-bold">
             {errors.email}
            </small>
         
        </label>
        <label htmlFor="password" className="w-[80%] mx-auto space-y-2">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className={`w-full py-5 px-6 rounded-md border-solid border h-[30px] ${
              errors.password
                ? "focus:border-[rgba(255,0,0)] border-[rgba(255,0,0)]"
                : "focus:border-[#ecedec] border-[#ecedec]"
            } `}
            onBlur={handleBlur}
            onChange={handleChange}
          />
         
            <small className="text-[#be1818] text-sm font-bold">
             {errors.password}
            </small>
        
        </label>

        <button
          disabled={loading?loading:(signUpPage ? disableForSignUp : false)}
          className={`px-3 py-2 w-[80%] mx-auto rounded-md ${loading?'bg-[rgba(158,47,47,0.72)] cursor-not-allowed flex items-center justify-center' :'bg-primary-red cursor-pointer hover:bg-[rgba(172,15,18,0.94)]'} text-[1.15rem]  md:text-[1.25rem]  text-[#fff]  transition-all duration-200 ease-in`}
        >
          {loading?<FaSpinner  size={20} color={'#fff'} className="animate-spin w-5 h-5" />:(signUpPage ? "Sign Up" : "Sign In")}
        </button>
        {signUpPage && (
          <p className="font-medium text-[1.2rem] text-[rgb(141,140,140)] mt-[10%]">
          Have an Account <Link href={"/signIn"}  className="text-[rgb(212,212,212)] font-bold">Sign In</Link>
          </p>
        )}
        {!signUpPage && (
          <div className="absolute bottom-[8%] flex w-full  flex-col space-y-3 items-center px-6  ">
            <p className="font-medium text-[1.2rem] text-[rgb(141,140,140)]">
              New to Netflix? {" "}
              <Link href="/signUp" className="text-[rgb(212,212,212)] font-bold">
                Sign Up
              </Link>{" "}
              now
            </p>
            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled ={loading}
              className={`text-[#f3f1f1] ${loading ? 'bg-[rgba(9,54,204,0.16)] cursor-not-allowed':'bg-[#0937cc] focus:ring-[#0937cc]/50'} transition-all duration-200 ease-in hover:shadow-lg focus:ring-4 text-[1.2rem] justify-center h-[45px] w-[80%] mx-auto  focus:outline-none  font-medium rounded-md text-sm px-3 py-2 text-center inline-flex items-center `}
            >
           {loading?<FaSpinner size={16} color={'#fff'} className="animate-spin w-4 h-4"/>: (<> <FaGoogle
                color={"#fff"}
                className="w-4 h-4 mr-2 -ml-1"
                size={16}
              />
              Sign in with Google
              </>
              )}
            </button>
          </div>
        )}
      </motion.form>
    </>
  );
}

export default SignIn;
