import React from "react";

const Section1 = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
        <div
          className="grid grid-cols-1 gap-2 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-5xl mx-auto"
          role="list"
        >
          <article
            className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/736x/2b/74/7b/2b747b71b782a8833f2b3ad9b0e37cd1.jpg')",
            }}
          >
            <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
              <div className="bg-black p-8 h-full justify-end flex flex-col">
                <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500">
                  01⏤ Experience
                </h1>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                  Crafting an effortless journey with user-first.
                </p>
              </div>
            </div>
          </article>
          <article
            className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/564x/3c/c2/6c/3cc26c0140c2f0dc70d8aa48416c41dc.jpg')",
            }}
          >
            <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
              <div className="bg-black p-8 h-full justify-end flex flex-col">
                <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400">
                  02⏤ Interaction
                </h1>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                  Our platform is designed for simplicity and ease.
                </p>
              </div>
            </div>
          </article>
          <article
            className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg')",
            }}
          >
            <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
              <div className="bg-black p-8 h-full justify-end flex flex-col">
                <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-cyan-400">
                  03⏤ Design
                </h1>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                  Our design philosophy centers around the user.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Section1;
