"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import img from "./images/logo.png";
import Link from "next/link";
import img1 from "./images/IMG.png";
import prof from "./images/prof1.jpg";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "./Footer";
function MainPage() {
  const [clicked3, setclicked3] = useState(false);
  const [clicked1, setclicked1] = useState(false);
  const [clicked2, setclicked2] = useState(false);
  const [text, settext] = useState("");

  const info = {
    skills: {
      title: "skills",
      info: [
        {
          title: "Web Development",
          details: "MERN stack developer with 3 years of experience",
        },
        {
          title: "App Development",
          details: "React Native developer",
        },
      ],
    },
    education: {
      title: "educaton",
      info: [
        {
          title: "Bachelor Of Technology",
          details: "KIIT University,Bhubaneswar",
        },
      ],
    },
    experiences: {
      title: "experiences",
      info: [
        {
          title: "Hackathon",
          details: "Top 5 in Code4Odisha 2022 in ITER Bhubaneswar,Odisha",
        },
        {
          title: "Internship",
          details: "Done internship under Fillaap Studios for 3 months",
        },
      ],
    },
  };

  const el = useRef(null);
  const form = useRef();
  const toggletext = (name, msg) => {
    if (name == "b1") {
      setclicked1(true);
      setclicked2(false);
      setclicked3(false);
      settext(info.skills);
    } else if (name == "b2") {
      setclicked1(false);
      setclicked2(true);
      setclicked3(false);
      settext(info.experiences);
    } else if (name == "b3") {
      setclicked1(false);
      setclicked2(false);
      setclicked3(true);
      settext(info.education);
    }
  };
const handelsub = ()=>{
  
}
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "App Developer"],
      typeSpeed: 70,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 400,
      loop: true,
      loopCount: Infinity,
    });

    toggletext("b1", "skills");

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
     
      <section id="home" className="p-5 h-[90vh]">
        <div className="flex flex-col-reverse md:flex-row items-center mx-auto justify-evenly text-white">
          <div className="right text-center">
            <div className="mx-auto">
              <div className="md:flex items-center justify-center text-3xl space-x-1">
                <span>Hi,my name is </span>
                <span className="text-blue-600">Debangan</span>
              </div>
              <span className="text-gray-400 text-center text-xl ">
                and i am passionate
              </span>
              <div className="h-14">
                <span className="text-blue-600 text-3xl " ref={el} />
              </div>
            </div>
            <div className="buttons my-1  md:flex items-center justify-center space-x-2">
              <a href="resume.pdf" download="resume.pdf" target="_blank">
                {" "}
                <button className="bg-blue-600 mx-auto flex items-center justify-center  text-white rounded-md px-4 py-2">
                  <AiOutlineCloudDownload className="mx-1 text-lg" /> Download
                  Resume
                </button>
              </a>
              <a
                target="_blank"
                className="flex items-center justify-center md:mt-0 mt-2"
                href="https://github.com/debangan03"
              >
                {" "}
                <button className="bg-blue-600 flex items-center justify-center  text-white rounded-md px-4 py-2">
                  <AiFillGithub className="mx-1 text-lg" /> Github
                </button>
              </a>
            </div>
          </div>
          <div className="left ">
            <Image
              className="lazy  md:w-full h-full w-[90%] md:mt-12  "
              src={img1}
              width={500}
              height={550}
            />
          </div>
        </div>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <section id="about" className="p-10 ">
        <div className="md:flex  mx-auto justify-evenly text-white">
          <div className="left">
            <Image
              className="lazy rounded-lg shadow-sm shadow-slate-600"
              src={prof}
              width={500}
              height={650}
            />
          </div>
          <div className="right md:p-10 p-4">
            <h1 className="text-blue-400 text-center md:text-start  font-bold text-3xl">
              About Me
            </h1>
            <p className="text-justify mb-4">
              I am a full stack web devloper and currenty i an in <br /> 3rd
              year B.Tech CSE in Kiit Bhubaneswar.
            </p>
            <div>
              <div
                className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                role="group"
              >
                <button
                  onClick={() => {
                    toggletext("b1", "skills");
                  }}
                  type="button"
                  className={`inline-block rounded-r ${
                    clicked1 ? "border-b-2 border-blue-600" : ""
                  }    bg-primary px-4 md:px-14 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700`}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    toggletext("b2", "experiences");
                  }}
                  type="button"
                  className={`inline-block rounded-r ${
                    clicked2 ? "border-b-2 border-blue-600" : ""
                  }    bg-primary px-4 md:px-14 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700`}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Experiences
                </button>
                <button
                  onClick={() => {
                    toggletext("b3", "education");
                  }}
                  type="button"
                  className={`inline-block rounded-r ${
                    clicked3 ? "border-b-2 border-blue-600" : ""
                  }    bg-primary px-4 md:px-14 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700`}
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Education
                </button>
              </div>
              {text && (
                <div className="details text-white">
                  <h1 className="text-2xl text-blue-200 py-4 font-bold">
                    {text.title.toUpperCase()}
                  </h1>
                  {Object.values(text.info).map((item) => {
                    return (
                      <div>
                        <p className="text-xl text-blue-500">{item.title}</p>
                        <p className="p-2 text-md">{item.details}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {/* {clicked1 && <Link href={'/Skills'}><button className="bg-blue-600 p-2 px-4 text-lg rounded">learn more &rarr;</button></Link> } */}
          </div>
        </div>
      </section>{" "}
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <section className="contact md:px-20 px-2" id="contact">
        <h1 className="text-blue-400 text-center pt-2 md:text-start  font-bold text-3xl">
          Contact Me
        </h1>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29336.923578763282!2d88.3935832562139!3d23.20246295904558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8e6173826243f%3A0xcbd2098e2352a1ec!2sGuptipara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1690135555746!5m2!1sen!2sin"
              />
              <div className="bg-white relative flex flex-wrap px-2 py-6 md:px-2 rounded shadow-md">
                <div className="w-1/2 ">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Guptipara,Hooghly,West Bengal,India</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:debangan2019@gmail.com"
                    className="text-blue-500 leading-relaxed"
                  >
                    debangan2019@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <a href="tel:+917699550670" className="leading-relaxed">
                    +91 7699550670
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 shadow-lg shadow-slate-600 bg-slate-900 flex flex-col md:ml-auto w-full px-4 md:py-8 mt-8 md:mt-0">
              <h2 className="text-blue-400 text-xl mb-1 font-medium title-font">
                Let's Talk
              </h2>

              <form
                
                action="https://formspree.io/f/mbjvlwkd"
                method="POST"
                onSubmit={handelsub}
              >
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mb-2 bg-slate-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mb-2 bg-slate-700  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full mb-2 bg-slate-700  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />

                <input
                  type="submit"
                  value={"send"}
                  className="text-white w-full bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                />
              </form>
            </div>
          </div>
        </section>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <Footer />
    </>
  );
}

export default MainPage;
