import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {AiOutlineUser} from "react-icons/ai"

const Navbar = () => {
  const [scroll, setScroll] = useState(true);
  const [scrollTop, setScrollTop] = useState(0)

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  window.onscroll = function(){
    scrollPoint();
  }

  function scrollPoint() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let getclientHeight = document.documentElement.clientHeight;

    let calcHeight = scrollHeight - getclientHeight;
    let final = Math.round((scrollTop * 100) / calcHeight);
    scrollTop =final;
    setScrollTop(scrollTop);
    
  }

  console.log(scrollTop);

  const [burger, setBurger] = useState(false);
  let [clipPath, setClipPath] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (burger === true && clipPath < 150) {
        setClipPath((prev) => prev + 30);
      }
      if (burger === false && clipPath > 0) {
        setClipPath((prev) => prev - 30);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [burger, clipPath]);

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className={` ${
      scroll ? " bg-[#E7F6ED]" : "shadow bg-white/60"
    } w-full fixed top-0 left-0 z-50`}>
      <div
        className={` w-full h-[80px] items-center flex myGlass opacity-50`}
      >
        <div className=" w-full">
        <div className={``}>
          <div className=" container md:px-[0rem] lg:px-[13rem] mx-auto w-full flex justify-between items-center px-5 m-0 ">
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
              <Link to={'/about'}>
              <h3>About us</h3>
              </Link>
              <h3>Contact</h3>
            </div>
            <div className=" relative md:hidden">
              <button className=" burger" onClick={() => setBurger(!burger)}>
                Burger
              </button>
              <div
                className={burger ? "bg-clip-path" : "bg-clip-path active"}
                style={{
                  clipPath: `circle(${clipPath}% at 92% 3rem)`,
                  transition: "clip-path 0.7s",
                  transitionTimingFunction:
                    "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <ul className={burger ? "nav-items active" : "nav-items"}>
                  <li className={burger ? "anniSlideDown" : "anniSlideUp"}>
                    Works
                  </li>
                  <li
                    className={
                      burger
                        ? "anniSlideDown ani_delay_2"
                        : "anniSlideUp ani_delay_2"
                    }
                  >
                    About Us
                  </li>
                  <li
                    className={
                      burger
                        ? "anniSlideDown ani_delay_4"
                        : "anniSlideUp ani_delay_4"
                    }
                  >
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="progress-bar-container absolute left-0 top-7 w-full">
            <div className="progress-bar-indicator" style={{ width: `${scrollTop}%` }}></div>
          </div>
      </div>
      {/* inthere */}
    </div>
  );
};

export default Navbar;
