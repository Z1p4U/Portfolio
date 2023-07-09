import React from "react";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
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

const HeroSection = () => {
  return (
    <>
      <div className=" mt-40">
        <div className=" grid grid-cols-12">
          <div className=" col-start-1 col-span-12 md:col-span-7 px-5 py-10">
            <div className=" mb-5 text-[#3c3e41ae] text-xs grid grid-cols-12">
              <div className=" col-start-1 col-span-6">
                <span className=" me-3">C R A F T I N G </span>
                <span> E X P E R I E N C E S</span>
              </div>
              <div className=" col-start-3 col-span-6">
                <span className=" me-3">B U I L D I N G </span>
                <span> C O N N E C T I O N S</span>
              </div>
            </div>

            <h1 className=" text-6xl font-bold ">
              Hi, We're
              <span className=" text-red-500 wow animate__backInUp">
                {" "}
                Team A
              </span>
            </h1>

            <div className=" flex typetext mt-3">
              <p className=" me-2 text-red-500">We</p>
              <div className="">
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 50,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Are Full Stack Web Developers.")
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString("Have Strong Passion And Eager To Learn.")
                      .changeDeleteSpeed(0.3)
                      .pauseFor(1500)
                      .deleteAll()

                      .typeString(
                        "Loves Building Beautiful and User-Friendly Websites."
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

            <div className=" mt-5 grid grid-cols-12">
              <p className=" text-[#3c3e41ae] text-md col-start-1 col-span-10 leading-7">
                Welcome to our portfolio! We are passionate and dedicated web
                developers with a focus on crafting impactful web experiences,
                We love creating beautiful and user-friendly websites. Let's
                collaborate and bring your web ideas to life!
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
                  alt=""
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
