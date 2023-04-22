"use client";
import { authContext, useAuth } from "@/app/context/AuthContext";
import { localProfile, urlString } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function EntertainmentNav() {
  const {user,logOut} = useAuth() as authContext;
  /**
   * @todo : create a mobile nav for the entertainement nav.
   */
  const [photoUrl, setPhotoUrl] = useState<urlString>('1');
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  useEffect(() => {
    let profile = localStorage.getItem("profile"); 
    if( profile !== null){
      const {photoUrl} = JSON.parse(profile) as localProfile;
      setPhotoUrl(photoUrl);
    }
    function darkEffect() {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    document.addEventListener("scroll", darkEffect);
    return () => {
      document.removeEventListener("scroll", darkEffect);
    };
  }, []);
  return (
    <nav
      className={`fixed h-[4.25rem] w-full top-0 ${
        show ? "bg-[#0d0d0d] shadow-lg" : "bg-transparent"
      } z-[900] flex items-center transition-all duration-200 ease-in`}
    >
      <div
        className={
          "absolute left-[5%] cursor-pointer space-x-2 flex items-center  md:text-[1.1rem]"
        }
      >
        <Image src={"/logo.png"} alt="netflix logo" height={100} width={100} />
        <p onClick={()=> setShowMobileNav(prevState => !prevState)} className="block  md:none">Browse</p>
        <div className={`md:flex md:space-x-2 md:space-y-0 md:px-0 md:py-0 md:flex-row md:bg-[rgba(0,0,0,0)] md:relative md:top-0 md:left-0 ${showMobileNav? 'flex':'hidden'} absolute top-[80%] left-[60%] flex-col space-y-3 px-3 py-2 items-center bg-primary-black peer-hover:bg-mid-gray transition-all ease-in duration-300`}>
        <Link href={`${user?.displayName}/${user?.uid}/list`}>My List</Link>
        <Link href={`genre/movie/28`}>Movies</Link>
        <Link href={`genre/tv/16`}>Tv Shows</Link>
        </div>
      </div>
      <div
        className={
          "absolute right-[5%] cursor-pointer rounded-md flex items-center"
        }
      >
        <Image
          className={"cursor-pointer rounded-md "}
          src={`/avatar/avatar-${photoUrl}.png`}
          alt="profile avatar"
          height={40}
          width={40}
          onClick={() => setDropdown((prevState) => !prevState)}
        />
        {dropdown && (
          <div className="absolute top-[130%] text-center  hover:first:bg-mid-gray w-[6rem] h-[6.5rem] right-[5%] px-3 py-1 bg-[rgba(0,0,0,0.63)] flex flex-col rounded-md justify-center items-center z-[15] space-y-3 transition-all duration-200 ease-in ">
            <Link
              href={`/profile/${user?.displayName}/${user?.uid}`}
              className={
                "cursor-pointer hover:bg-[rgba(63,63,63,0.57)] w-full py-1 mx-[-1rem]"
              }
            >
              Account
            </Link>
            <button
            onClick={logOut}
              className={
                "cursor-pointer  hover:bg-[rgba(63,63,63,0.57)] w-full py-1 mx-[-1rem] "
              }
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default EntertainmentNav;
