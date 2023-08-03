"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";
import img1 from "./images/IMG.png";
import loco from './images/l.png'
import wea from './images/w.png'
import prof from "./images/prof1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typed from "typed.js";
import img from "./images/logo.png";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";
import { AiFillGithub, AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "./Footer";
function MainPage() {
  const [clicked3, setclicked3] = useState(false);
  const [clicked1, setclicked1] = useState(true);
  const [clicked2, setclicked2] = useState(false);

  const [text, settext] = useState({
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
  });
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

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
  const templateParams = {
    user_name: name,
    user_email: email,
    message: msg,
  };
  const sentemail = () => {
    if (
      templateParams.user_name.length < 3 ||
      templateParams.user_email.length < 5 ||
      templateParams.message.length < 2
    ) {
      toast.error("Sorry! please fill the form", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      emailjs
        .send(
          "service_1loe79f",
          "template_krflvak",
          templateParams,
          process.env.NEXT_PUBLIC_API_KEY
        )
        .then(
          () => {
            toast.success("Yay! Message Sent Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setname("");
            setemail("");
            setmsg("");
          },
          (err) => {
            console.log("FAILED...", err);
            setname("");
            setemail("");
            setmsg("");
          }
        );
    }
  };

  useEffect(() => {
    setname("");
    setemail("");
    setmsg("");
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "App Developer"],
      typeSpeed: 100,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const el = useRef(null);
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

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="md:flex z-30 justify-between px-10 w-screen items-center font-semibold shadow-lg shadow-slate-800 bg-slate-900 p-5 sticky top-0  text-white ">
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
            href={"/#projects"}
            className="cursor-pointer hover:text-blue-500 hover:scale-105"
          >
            Projects
          </Link>
          <Link
            href={"/#contact"}
            className="cursor-pointer hover:text-blue-500 hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <section id="home" className="p-5 h-screen">
        <div className="flex flex-col-reverse md:flex-row items-center mx-auto justify-evenly text-white">
          <div className="right text-center">
            <div className="mx-auto">
              <div className="md:flex items-center justify-center text-3xl space-x-1">
                <span>Hi,my name is </span>
                <span className="text-blue-600">Debangan</span>
              </div>
              <span className="text-gray-400 text-center text-xl ">
                and I am passionate
              </span>
              <div className="h-14">
                <span className="text-blue-600 text-3xl " ref={el} />
              </div>
            </div>
            <div className="buttons my-1  md:flex items-center justify-center space-x-2">
              <a href="resume.pdf" target="_blank">
                {" "}
                <button className="bg-blue-500 hover:bg-blue-600  mx-auto flex items-center justify-center  text-white rounded-md px-4 py-2">
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
                <button className="bg-blue-500 hover:bg-blue-600 flex items-center justify-center  text-white rounded-md px-4 py-2">
                  <AiFillGithub className="mx-1 text-lg" /> Github
                </button>
              </a>
            </div>
          </div>
          <div className="left ">
            <Image
              className="lazy  md:w-full h-full w-[95%] md:mt-12  "
              src={img1}
              alt="img"
              width={500}
              height={550}
            />
          </div>
        </div>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <section id="about" className="p-10   h-full md:h-[85vh] ">
        <div className="md:flex  mx-auto justify-evenly text-white">
          <div className="left">
            <Image
              className="lazy rounded-lg shadow-sm shadow-slate-600"
              src={prof}
              alt="img"
              width={500}
              height={650}
            />
          </div>
          <div className="right  md:p-10 p-4">
            <h1 className="text-blue-400 text-center md:text-start  font-bold text-3xl">
              About Me
            </h1>
            <p className="text-justify mb-4">
              I am a full stack web devloper and currenty i an in <br className="md:block hidden"/> 3rd
              year B.Tech CSE in Kiit Bhubaneswar.
            </p>
            <div className="h-72">
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
                  {Object.values(text.info).map((item, i) => {
                    return (
                      <div key={i}>
                        <p className="text-xl text-blue-500">{item.title}</p>
                        <p className="p-2 text-md">{item.details}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="pb-10 " id="projects">
        <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
        <h1 className="text-blue-400 text-center pt-2 px-20 md:text-start  font-bold text-3xl">
          Projects
        </h1>
        <div className="lg:grid  grid-cols-3 bg-transparent lg:grid-flow-row-dense lg:gap-2 p-6   md:px-24 flex flex-wrap mt-8 ">
          <div className="h-full w-fit   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <Image
                className="h-[300px] w-[400px] object-cover object-left transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src={loco}
                alt="locokart"
                height={900}
                width={900}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Loco Cart
              </h1>

              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
              <button className="rounded bg-blue-500  hover:bg-blue-600  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href="https://locokart.vercel.app">Explore  &rarr;</a>
              </button>
            </div>
          </div>
          <div className="h-full w-fit   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <Image
                className="h-[300px] w-[400px] object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src={wea}
                alt="Weatherx"
                height={900}
                width={900}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Weatherx
              </h1>

              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
              <button className="rounded bg-blue-500  hover:bg-blue-600  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <a href="https://weatherx-iota.vercel.app">Explore  &rarr;</a>
              </button>
            </div>
          </div>
          <div className="h-full w-fit   rounded-lg mb-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="">
              <img
                className="h-[300px] w-[400px] object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src="https://i.ibb.co/p2mwG6H/S1.png"
                alt="Mugs"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/70" />
            <div className="absolute inset-0 flex translate-y-[120%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Links Messages
              </h1>

              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></p>
              <button className="rounded bg-blue-500 hover:bg-blue-600  py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                <Link href={"https://github.com/debangan03/links"}>
                  Explore  &rarr;
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://github.com/debangan03/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">See More &rarr;</button>
          </a>
        </div>
      </section>
      <hr className="border-blue-500 border-2 mx-auto w-[90%] rounded-full" />
      <section className="contact md:px-20 px-2" id="contact">
        <h1 className="text-blue-400 text-center pt-2 md:text-start  font-bold text-3xl">
          Contact Me
        </h1>
        <section className="text-gray-800 body-font rounded relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29336.923578763282!2d88.3935832562139!3d23.20246295904558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8e6173826243f%3A0xcbd2098e2352a1ec!2sGuptipara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1690135555746!5m2!1sen!2sin"
              />
              <div className="bg-slate-800 relative flex flex-wrap px-2 py-6 md:px-2 rounded shadow-md">
                <div className="w-1/2 hidden md:block">
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-blue-500">
                    Guptipara,Hooghly,West Bengal,India
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <div className="md:hidden py-2">
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-blue-500 ">
                    Guptipara,Hooghly,West Bengal,India
                  </p>
                  </div>
                  <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:debangan2019@gmail.com"
                    
                    className="text-blue-500 leading-relaxed hover:text-blue-400"
                  >
                    debangan2019@gmail.com
                  </a>
                  <h2 className="title-font  font-semibold text-gray-100 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <a
                    href="tel:+917699550670"
                    className="leading-relaxed  hover:text-blue-400 text-blue-500"
                  >
                    +91 7699550670
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 shadow-lg shadow-slate-600 bg-slate-900 flex flex-col md:ml-auto w-full px-4 md:py-8 py-6 mt-8 md:mt-0">
              <h2 className="text-blue-400 text-xl mb-1 font-medium title-font">
                Let&apos;s Talk
              </h2>

              <form>
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  id="name"
                  name="name"
                  className="w-full mb-2 bg-slate-700 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Enter your valid email id"
                  value={email}
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
                placeholder="Enter your valueable message "
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  value={msg}
                  id="message"
                  name="message"
                  className="w-full mb-2 bg-slate-700  rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />

                <button
                  type="button"
                  onClick={sentemail}
                  className="text-white w-full bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  send
                </button>
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
