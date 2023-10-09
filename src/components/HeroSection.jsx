import React from "react";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import WOW from "wow.js";
import "animate.css";
import { Button } from "@mantine/core";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

const HeroSection = () => {
  return (
    <>
      <div className="">
        <div className=" grid grid-cols-12 grid-rows-2 md:grid-rows-1">
          <div className=" row-start-2 row-span-1 md:row-start-1 col-start-1 col-span-12 md:col-span-7 py-8">
            <div className=" mb-8 text-[#3c3e41ae] text-xs lg:text-sm align-middle grid grid-cols-12">
              <div className=" col-start-1 col-span-9 lg:col-span-7 mb-2">
                C R A F T I N G &nbsp;&nbsp; E X P E R I E N C E S
              </div>
              <div className=" col-start-5 col-span-9 lg:col-start-4 lg:col-span-7">
                B U I L D I N G &nbsp;&nbsp; C O N N E C T I O N S
              </div>
            </div>

// <<<<<<< skill&footer
//             <h1 className=" text-6xl font-bold ">
//               Hi, We're
//               <span className=" text-red-500 ">
//                 <p className="wow animate__backInUp inline-block">Team A</p>
// =======
            <div className=" text-5xl text-start md:text-6xl font-bold ">
              <h1>Hi!</h1>
              <h1 className=" inline-block">We're</h1>
              <span className=" text-blue-500">
                {" "}
                <p className="wow animate__fadeInRight inline-block">Team A</p>
              </span>
            </div>

            <div className=" text-start typetext mt-8 w-[350px] lg:w-[550px] xl:w-[650px] h-[60px] xl:h-fit">
              {/* <p className=" me-2 text-blue-500">We</p> */}
              <div className="">
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 50,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span style='color: #3b82f6;'>We</span> Are Full Stack Web Developers."
                      )
                      .changeDeleteSpeed(0.5)
                      .pauseFor(1500)
                      .deleteChars(30)

                      .typeString("Have Strong Passion And Eager To Learn.")
                      .changeDeleteSpeed(0.3)
                      .pauseFor(1500)
                      .deleteChars(39)

                      .typeString(
                        "Love Building Beautiful and User-Friendly Websites."
                      )
                      .changeDeleteSpeed(0.3)
                      .pauseFor(1500)
                      .deleteChars(46)

                      .changeDelay(100)
                      .typeString("Web Development!")
                      .pauseFor(1500)

                      .start();
                  }}
                />
              </div>
            </div>

            <div className=" mt-8 grid grid-cols-12">
              <p className=" text-[#3c3e41ae] text-sm col-start-1 col-span-11 leading-6 tracking-wide md:leading-7 text-start">
                Welcome to our portfolio! We are passionate and dedicated web
                developers with a focus on crafting impactful web experiences,
                <span className="hidden lg:inline">
                  We love creating beautiful and user-friendly websites.
                </span>{" "}
                Let's collaborate and bring your web ideas to life!
              </p>
            </div>

            <div className="my-6 flex flex-col gap-3 justify-start">
              <div className="">
                <button className=" btn">Explore Our Works</button>
              </div>

              <div className=" flex gap-2 align-middle items-center">
                <button className=" icon-btn">
                  <FiFacebook />
                </button>
                <button className=" icon-btn">
                  <FiGithub />
                </button>
                <button className=" icon-btn">
                  <FiLinkedin />
                </button>
                <button className=" icon-btn">
                  <FiTwitter />
                </button>
              </div>
            </div>
          </div>
          <div className=" col-start-1 md:col-start-8 col-span-12 md:col-span-4 h-fit">
            <Tilt
              options={defaultOptions}
              className={" w-[300px] md:w-[250px] h-[450px] mx-auto"}
            >
              <div className="tilt">
                <img
                  className="profile w-[250px] md:w-[300px] h-[400px]"
                  src="https://www.seekpng.com/png/detail/62-628547_tom-jerry-png-boomerang-tv-tom-and-jerry.png"

            <div className="my-8 flex flex-col gap-5 justify-start lg:flex-row lg:justify-between lg:pe-20">
              <div className=" flex gap-5 align-middle items-center">
                <button className=" icon-btn">
                  <FiFacebook />
                </button>
                <button className=" icon-btn">
                  <FiGithub />
                </button>
                <button className=" icon-btn">
                  <FiLinkedin />
                </button>
                <button className=" icon-btn">
                  <FiTwitter />
                </button>
              </div>

              <div className="">
                <button className=" btn">Explore Our Works</button>
              </div>
            </div>
          </div>
          <div className=" row-start-1 row-span-1 col-start-1 md:col-start-8 col-span-12 md:col-span-5 h-fit">
            <Tilt
              options={defaultOptions}
              className={" px-8 md:px-0 w-full h-[500px] mx-auto"}
            >
              <div className="tilt">
                <img
                  className="profile w-full h-[500px]"
                  src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=1060&t=st=1689104904~exp=1689105504~hmac=86926569a1e949559ae4ba93a699f36c050ebf6e69cfb79a8cd37fd80e1321d7"

                  alt=""
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <hr className=" w-full px-0 mx-0" />
    </>
  );
};

export default HeroSection;
