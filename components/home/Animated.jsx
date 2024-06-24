import React from "react";
import Image from "next/image";

const AnimatedImageCards = () => {
  return (
    <section className="bg-[#e3e2df] pt-24 lg:pt-6 lg:pb-0 pb-24 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="relative group">
            <Image
              width={350}
              height={350}
              src="/images/10th.png"
              className="rounded-xl rotate-6 group-hover:rotate-0 duration-500 group-hover:-translate-y-6 object-cover group-hover:scale-150 transform origin-bottom"
              alt="10th"
            />
          </div>
          <div className="relative group">
            <Image
              width={350}
              height={350}
              src="/images/12thsci.png"
              className="rounded-xl -rotate-12 group-hover:rotate-0 duration-500 group-hover:-translate-y-6 object-cover group-hover:scale-150 transform origin-bottom"
              alt="12th Science"
            />
          </div>
          <div className="relative group">
            <Image
              width={350}
              height={350}
              src="/images/12tharts.png"
              className="rounded-xl rotate-6 group-hover:rotate-0 duration-500 group-hover:-translate-y-6 object-cover group-hover:scale-150 transform origin-bottom"
              alt="12th Arts"
            />
          </div>
          <div className="relative group">
            <Image
              width={350}
              height={350}
              src="/images/12thcomm.png"
              className="rounded-xl -rotate-12 group-hover:rotate-0 duration-500 group-hover:-translate-y-6 object-cover group-hover:scale-150 transform origin-bottom"
              alt="12th Commerce"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center text-[#5d001e] flex flex-col lg:flex-row justify-center items-center space-x-5">
          <span>We are highly reliable on</span>
          <Image
            src="https://www.indiaresults.com/assets/global-images/IRC-logo.png"
            alt="logo"
            width={150}
            height={140}
            className="mt-2 lg:mt-0"
          />
        </h1>
      </div>
    </section>
  );
};

export default AnimatedImageCards;
