import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {AiOutlineUser} from "react-icons/ai"

const Navbar = () => {
  const [scroll, setScroll] = useState(true);

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const [burger, setBurger] = useState(true);

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className=" ">
      <div
        className={`${
          scroll ? " bg-[#E7F6ED]" : "shadow bg-white/60"
        }  z-50 w-full h-[80px] items-center flex fixed top-0 left-0 myGlass opacity-50`}
      >
        <div className={` container px-[13rem] mx-auto `}>
          <div className=" flex justify-between items-center ">
            <div>
              <span className=" text-[25px] font-[500]">Hously</span>
            </div>
            <div className=" hidden md:flex gap-5">
              <Link>
                <h3>Home</h3>
              </Link>
              <h3>Buy</h3>
              <h3>Sell</h3>
              <h3>Pages</h3>
              <h3>About us</h3>
              <h3>Contact</h3>
            </div>
            <div onClick={() => setBurger(!burger)} className=" md:hidden">
              burger
            </div>
          </div>
        </div>
      </div>
      {/* inthere */}
    </div>
  );
};

export default Navbar;
