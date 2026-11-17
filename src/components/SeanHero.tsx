
import React from 'react';
import seanImage from '../assets/img/seanImage.png';
import { TypeAnimation } from 'react-type-animation';

const SeanHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] min-h-screen mx-auto py-10 md:py-8 px-4 bg-black">

      {/* Image */}
      <div className="md:col-span-1 flex justify-center items-center">
        <img
          src={seanImage}
          alt="Sean"
          className="w-[200px] sm:w-[250px] lg:w-[350px] h-auto"
        />
      </div>

      {/* Text */}
      <div className="md:col-span-2 flex flex-col justify-center px-2 sm:px-5 text-center md:text-left">

        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <br />

          <div className="mt-2 min-h-[2.2em]">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Fullstack Developer",
                1000,
                "Webdesigner",
                1000,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </div>
        </h1>

        <p className="text-white text-base sm:text-lg lg:text-xl my-6">
          My name is Sean Patten and I have 3+ years experience in Fullstack development.
        </p>

        <div className="my-6">
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-xl border border-gray-400 text-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-pink-500 hover:border-transparent transition"
          >
            Contact
          </a>
        </div>

      </div>
    </div>
  );
};

export default SeanHero;
