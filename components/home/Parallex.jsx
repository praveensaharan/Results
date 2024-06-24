import React from "react";

const Parallex = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#9a1750] to-[#ee4c7c]">
        <section className="text-gray-700 body-font">
          <div className="flex justify-center mt-10 text-4xl font-regular text-[#5d001e]">
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
                      alt="Latest Milling Machinery"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-[#5d001e]">
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
                      alt="Reasonable Rates"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-[#5d001e]">
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
                      alt="Time Efficiency"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-[#5d001e]">
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
                      alt="Expertise in Industry"
                    />
                  </div>
                  <h2 className="title-font font-regular text-2xl text-[#5d001e]">
                    Expertise in Industry
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#9a1750] to-[#ee4c7c] text-white">
        <div className="text-gray-600 body-font bg-[#e3e2df] dark:bg-[#5d001e]">
          <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-[#5d001e] dark:text-[#e3e2df] sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Title of Project
              </h1>
              <p className="mb-8 leading-relaxed dark:text-[#e3e2df]">
                Short description here, Short description here Short description
                here Short description here Short description here Short
                description here.
              </p>
              <div className="flex justify-center">
                <a
                  href="/"
                  className="inline-flex text-white bg-[#5d001e] border-0 py-2 px-6 focus:outline-none hover:bg-[#9a1750] rounded text-lg"
                >
                  Start Exploring
                </a>
                <a
                  href="/"
                  className="ml-4 inline-flex text-gray-700 bg-[#e3afbc] border-0 py-2 px-6 focus:outline-none hover:bg-[#e3e2df] rounded text-lg"
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
    </section>
  );
};

export default Parallex;
