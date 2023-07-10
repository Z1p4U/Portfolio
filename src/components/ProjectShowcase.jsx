import React from "react";
import { AiFillGithub } from "react-icons/ai";

const ProjectShowcase = () => {
  return (
    <div>
      <div className=" text-lg font-bold uppercase my-10">
        P r o j e c t S h o w c a s e
      </div>

      <div className=" flex flex-wrap gap-10">
        <div className=" border border-gray-200 rounded-lg shadow bg-gray-100">
          <div className=" block lg:flex align-middle">
            <div className=" lg:w-[627.64px]">
              <a href="#">
                <img className="rounded-t-lg" src="/dashboard.png" alt="" />
              </a>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-blue-500">
                  Dashboard Theme 2023
                </h5>
              </a>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">
                Technology
              </h5>
              <div className=" mb-5">
                <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  React
                </span>
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                  Mantine
                </span>
                <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                  Animate.css
                </span>
                <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Recharts
                </span>
              </div>

              <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">
                Team Member
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Shin Khant ,Zipp ,Kyaw Min Thant and Chit ko
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-blue-500 rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-100"
              >
                View Repo
                <AiFillGithub />
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-blue-500 rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-100"
              >
                Live Preview
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 12 16"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className=" border border-gray-200 rounded-lg shadow bg-gray-100">
          <div className=" block lg:flex align-middle">
          <div>
          <a href="#">
            <img className="rounded-t-lg" src="/tour.png" alt="" />
          </a>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-blue-500">
                Travel Tour 2023
              </h5>
            </a>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">
              Technology
            </h5>
            <div className=" mb-5">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                Tailwind
              </span>
              <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                Animate.css
              </span>
              <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Swiper
              </span>
            </div>

            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">
              Team Member
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Shin Khant ,Zipp ,Kyaw Min Thant and Chit ko
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-blue-500 rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-100"
            >
              View Repo
              <AiFillGithub />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-blue-500 rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-100"
            >
              Live Preview
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
                ></path>
              </svg>
            </a>
          </div>
          </div>
        </div>

        <div className=" border border-gray-200 rounded-lg shadow bg-gray-100">
          <div className=" block lg:flex align-middle">
          <div>
          <a href="#">
            <img className="rounded-t-lg lg:w-[627.64px]" src="/contactApp.png" alt="" />
          </a>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-5 text-2xl font-bold tracking-tight text-blue-500">
                Contact App 2023
              </h5>
            </a>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">
              Technology
            </h5>
            <div className=" mb-5">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                React
              </span>
              <span class="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                Mantine
              </span>
              <span class="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                Redux RTK Query
              </span>
              <br />
              <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                React Host Toast
              </span>
            </div>

            <h5 className="mb-2 text-lg font-bold tracking-tight text-blue-500">
              Team Member
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Shin Khant ,Zipp ,Kyaw Min Thant and Chit ko
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-blue-500 rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-100"
            >
              View Repo
              <AiFillGithub />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-blue-500 rounded-lg hover:text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-100"
            >
              Live Preview
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 12 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
                ></path>
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
