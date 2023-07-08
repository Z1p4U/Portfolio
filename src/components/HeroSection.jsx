import React from "react";
import Typewriter from "typewriter-effect";
import "animate.css";
import { Button } from "@mantine/core";

const HeroSection = () => {
  return (
    <>
      <div className=" mt-40">
        <div className=" grid grid-cols-12">
          <div className=" col-start-1 col-span-7 px-5 py-10">
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

            <div className=" mt-5 flex justify-center align-middle items-center">
              <Button
                variant="outline"
                color="red"
                radius="xl"
                size="md"
                compact
              >
                Explore Our Works
              </Button>
            </div>
          </div>
          <div className=" col-start-8 col-span-4 h-fit">
            <img
              src="https://www.seekpng.com/png/detail/62-628547_tom-jerry-png-boomerang-tv-tom-and-jerry.png"
              className=" bg-white h-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
