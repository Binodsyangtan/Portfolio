import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/binodprofile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00FFFF] mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Binod Syangtan
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#00BFFF] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "web developer",
                // 'CSIT student',
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#00BFFF]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a full-stack web developer with hands-on experience building
            scalable and user-friendly web applications through various personal
            and academic projects. I specialize in the MERN stack (MongoDB,
            Express.js, React, Node.js) and enjoy working across both front-end
            and back-end to create seamless user experiences. I’m passionate
            about learning modern technologies and building real-world solutions
            that make an impact.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1aw4oBBtu7x6N4yIQA7fjM_Hz18WME1Gl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(80deg, #00FFFF, #00BFFF)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* profile photo */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] group"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] transform rotate-3 rounded-lg shadow-lg group-hover:rotate-6 transition-transform duration-500"></div>

            {/* Image Layer */}
            <img
              src={profileImage}
              alt="Binod Syangtan"
              className="relative w-full h-full object-cover rounded-lg shadow-xl border-4 border-white"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
