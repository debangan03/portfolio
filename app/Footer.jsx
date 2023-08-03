'use client'
import React from "react"
import img from "./images/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-transparent  py-6">
      <div className="flex md:justify-around flex-col md:flex-row items-center">
        <div className="left">
          <div className="logo flex justify-center items-center space-x-2 cursor-pointer my-5 md:py-0 ">
            <Image width={40} height={40} src={img} className="img" alt='img' />
            <span className="hover:text-blue-500 text-white">
              Debangan&apos;s Portfolio
            </span>
          </div>
        </div>
        <div className="right flex justify-between space-x-10">
          <div className="first">
            <div>
              <h2 className="mb-6 text-center text-lg font-semibold text-blue-500">
                Social
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4 text-blue-400 hover:scale-95">
                  <a href="https://www.facebook.com/debangan.bhattacharyya.9" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4 text-blue-400 hover:scale-95">
                  <a href="https://www.instagram.com/debangan21" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="2nd">
            <div>
              <h2 className="mb-6  text-center text-lg font-semibold text-blue-500">
                Links
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4 text-blue-400 hover:scale-95">
                  <a href="https://github.com/debangan03" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 w-[95%] mx-auto border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex px-20 sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; 2023{" "}
          <a href="/" className="hover:underline">
            Debangan
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex md:mt-4 space-x-5 justify-center mt-0">
          <a
            href="https://www.facebook.com/debangan.bhattacharyya.9"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns=""
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          
          
          <a
            href="https://github.com/debangan03"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
