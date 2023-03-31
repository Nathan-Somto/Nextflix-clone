"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function GlobalNav() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    /**
     *  the darkEffect function gives that netflix nav effect when you scroll
     */
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
          "absolute left-[5%] cursor-pointer space-x-4 flex items-center text-[0.75rem] sm:text-base"
        }
      >
        <Image src={"/logo.png"} alt="netflix logo" height={100} width={100} />
        <p>My List</p>
        <p>Movies</p>
        <p>Tv Shows</p>
      </div>
      <div
        className={
          "absolute right-[5%] cursor-pointer rounded-md flex items-center"
        }
      >
        <Image
          className={"cursor-pointer rounded-md "}
          src={"/avatar-1.png"}
          alt="profile avatar"
          height={40}
          width={40}
          onClick={() => setDropdown((prevState) => !prevState)}
        />
        {dropdown && (
          <div className="absolute top-[130%] text-center  hover:first:bg-mid-gray w-[6rem] h-[6.5rem] right-[5%] px-3 py-1 bg-[rgba(0,0,0,0.63)] flex flex-col rounded-md justify-center items-center z-[15] space-y-3 transition-all duration-200 ease-in ">
            <Link
              href="/profile/johnDoe"
              className={
                "cursor-pointer hover:bg-[rgba(63,63,63,0.57)] w-full py-1 mx-[-1rem]"
              }
            >
              Account
            </Link>
            <button
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

export default GlobalNav;
