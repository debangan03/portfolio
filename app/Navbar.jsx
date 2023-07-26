import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from "./images/logo.png";

function Navbar() {
  return (
    <div><div className="md:flex z-30 justify-between px-10 w-screen items-center font-semibold shadow-lg shadow-slate-800 bg-slate-900 p-5 sticky top-0  text-white ">
    <Link href={"/"}>
      {" "}
      <div className="logo flex justify-center items-center space-x-2 cursor-pointer ">
        <Image width={40} height={40} src={img} alt="img" />
        <span className="hover:text-blue-500 ">
          Debangan&apos;s Portfolio
        </span>
      </div>
    </Link>
    <div className="lists flex items-center md:space-x-10  justify-evenly pt-2 md:pt-0">
      <Link
        href={"/"}
        className="cursor-pointer hover:text-blue-500  hover:scale-105"
      >
        Home
      </Link>
      <Link
        href={"/#about"}
        className="cursor-pointer hover:text-blue-500 hover:scale-105"
      >
        About
      </Link>
      <Link
        href={"/#contact"}
        className="cursor-pointer hover:text-blue-500 hover:scale-105"
      >
        Contact Me
      </Link>
      <Link
        href={"/#projects"}
        className="cursor-pointer hover:text-blue-500 hover:scale-105"
      >
        Projects
      </Link>
    </div>
  </div></div>
  )
}

export default Navbar