import React from "react";

const Parallex = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <section className="text-gray-700 body-font">
          <div className="flex justify-center mt-10 text-4xl font-regular">
            Why Us?
          </div>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Latest Milling Machinery
                  </h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Reasonable Rates
                  </h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Time Efficiency
                  </h2>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                  <div className="flex justify-center">
                    <img
                      src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                      className="w-32 mb-3"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-gray-900">
                    Expertise in Industry
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <div className="text-gray-600 body-font bg-white dark:bg-slate-900">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Title of Project
              </h1>
              <p className="mb-8 leading-relaxed dark:text-gray-300">
                Short description here, Short description here Short description
                here Short description here Short description here Short
                description here.
              </p>
              <div className="flex justify-center">
                <a
                  href="/"
                  className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded text-lg"
                >
                  Start Exploring
                </a>
                <a
                  href="/"
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Read Articles
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">The Third slide</h2>
        <p className="mt-2">Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center animated-background bg-gradient-to-r from-blue-500 via-blue-500 to-yellow-500 text-black">
        <h2 className="text-4xl font-bold">The Fourth slide</h2>
      </div>
    </div>
  );
};

export default Parallex;
