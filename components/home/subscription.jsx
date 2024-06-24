import React from "react";

const Subscription = () => {
  return (
    <div className="bg-[#e3e2df] pt-10">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto">
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-center mt-12 sm:text-5xl text-[#5d001e]">
            Pricing
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-[#9a1750]">
            Get started on our free plan and upgrade when you are ready.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm bg-white flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#9a1750]">Free</h3>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-[#9a1750]">
                  $0
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-[#5d001e]">You just want to discover</p>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">10 Credits</span>
                </li>
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">Generate video (2 credits)</span>
                </li>
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">Quizz (1 credit)</span>
                </li>
              </ul>
            </div>
            <a
              href="/auth/login"
              className="mt-8 bg-[#9a1750] text-white hover:bg-[#5d001e] block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Signup for free
            </a>
          </div>
          <div className="relative p-8 border border-gray-200 rounded-2xl shadow-sm bg-white flex flex-col">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#9a1750]">Pro</h3>
              <p className="absolute top-0 py-1.5 px-4 bg-[#5d001e] text-white rounded-full text-xs font-semibold uppercase tracking-wide transform -translate-y-1/2">
                Most popular
              </p>
              <p className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-[#9a1750]">
                  $12
                </span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-[#5d001e]">
                You want to learn and have a personal assistant
              </p>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">30 credits</span>
                </li>
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">Powered by GPT-4 (more accurate)</span>
                </li>
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">Generate video (2 credits)</span>
                </li>
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">Quizz (1 credit)</span>
                </li>
                <li className="flex items-center text-[#9a1750]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3">Analytics on the quizz</span>
                </li>
              </ul>
            </div>
            <a
              href="/auth/login"
              className="mt-8 bg-[#9a1750] text-white hover:bg-[#5d001e] block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            >
              Signup for Pro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
