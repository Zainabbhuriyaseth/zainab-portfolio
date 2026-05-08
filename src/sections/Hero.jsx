import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  FaReact,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaWordpress,
  FaFigma,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -18,
      repeat: -1,
      duration: 2.5,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030014] px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32"
    >
      {/* Background Glow */}

      <div className="absolute top-[-150px] left-[-100px] w-[550px] h-[550px] bg-purple-700/20 blur-[180px]" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[550px] h-[550px] bg-blue-700/20 blur-[180px]" />

      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Main Container */}

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-20">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 shadow-[0_0_30px_rgba(139,92,246,0.15)]">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <p className="uppercase tracking-[4px] text-xs sm:text-sm text-purple-300 font-semibold">
              Available For Work
            </p>

          </div>

          {/* Heading */}

          <h1 className="font-black leading-[1] tracking-[-2px]">

            <span className="block text-white text-[42px] sm:text-[60px] md:text-[72px] lg:text-[86px]">
              Zainabbibi
            </span>

            <span className="block bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent text-[30px] sm:text-[46px] md:text-[58px] lg:text-[72px] leading-[1.05]">
              N. Bhuriyaseth
            </span>

          </h1>

          {/* Typewriter */}

          <div className="mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 h-[45px]">

            <Typewriter
              words={[
                "React.js Developer",
                "Creative UI Engineer",
                "Frontend Specialist",
                "Modern Web Designer",
                "Node.js Developer",
                "UI/UX Designer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
            />

          </div>

          {/* Description */}

          <p className="mt-8 text-gray-400 text-base sm:text-lg leading-[1.9] max-w-2xl">

            Building premium futuristic digital experiences
            with immersive UI engineering, smooth animations,
            modern frontend architecture, and creative React.js
            development.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#projects"
              className="group relative overflow-hidden px-8 sm:px-9 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >

              <span className="relative z-10">
                View Projects
              </span>

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />

            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Download CV
            </a>

          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-10 sm:gap-16 mt-16">

            <div>

              <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                3+
              </h3>

              <p className="mt-3 text-gray-400">
                Live Projects
              </p>

            </div>

            <div>

              <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                2+
              </h3>

              <p className="mt-3 text-gray-400">
                Years Learning
              </p>

            </div>

            <div>

              <h3 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                100%
              </h3>

              <p className="mt-3 text-gray-400">
                Passion
              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center mt-10 lg:mt-0"
        >

          {/* Glow */}

          <div className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-[120px]" />

          {/* Ring */}

          <div className="absolute w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full border border-purple-500/20 animate-spin-slow" />

          <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full border border-blue-500/10 animate-pulse" />

          {/* Image */}

          <div className="relative z-20 p-[2px] rounded-[45px] bg-gradient-to-b from-purple-500/40 to-blue-500/20 shadow-[0_0_100px_rgba(139,92,246,0.35)]">

            <div className="rounded-[43px] overflow-hidden bg-[#08041d] backdrop-blur-xl border border-white/10">

              <img
                ref={imageRef}
                src="/profile.jpeg"
                alt="profile"
                className="w-[280px] sm:w-[380px] lg:w-[440px] h-[400px] sm:h-[540px] lg:h-[580px] object-cover"
              />

            </div>

          </div>

          {/* React */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-5 sm:top-10 left-0 z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <FaReact className="text-3xl sm:text-5xl text-cyan-400" />
            </div>
          </motion.div>

          {/* JS */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-16 sm:top-24 right-0 z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.25)]">
              <FaJs className="text-3xl sm:text-5xl text-yellow-400" />
            </div>
          </motion.div>

          {/* GitHub */}

          <motion.div
            {...floatingAnimation}
            className="absolute bottom-10 sm:bottom-16 left-2 sm:left-5 z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <FaGithub className="text-3xl sm:text-5xl text-white" />
            </div>
          </motion.div>

          {/* TypeScript */}

          <motion.div
            {...floatingAnimation}
            className="absolute bottom-16 sm:bottom-20 right-0 z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <SiTypescript className="text-3xl sm:text-5xl text-blue-400" />
            </div>
          </motion.div>

          {/* Tailwind */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-[40%] right-6 sm:right-12 z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <SiTailwindcss className="text-3xl sm:text-5xl text-cyan-300" />
            </div>
          </motion.div>

          {/* Node.js */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-[42%] left-[-5px] sm:left-[-20px] z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.25)]">
              <FaNodeJs className="text-3xl sm:text-5xl text-green-500" />
            </div>
          </motion.div>

          {/* MongoDB */}

          <motion.div
            {...floatingAnimation}
            className="absolute bottom-[34%] right-[-5px] sm:right-[-10px] z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-green-400/20 shadow-[0_0_40px_rgba(74,222,128,0.25)]">
              <SiMongodb className="text-3xl sm:text-5xl text-green-400" />
            </div>
          </motion.div>

          {/* WordPress */}

          <motion.div
            {...floatingAnimation}
            className="absolute bottom-[8%] left-[18%] z-30 hidden sm:block"
          >
            <div className="glass p-5 rounded-3xl border border-blue-300/20 shadow-[0_0_40px_rgba(147,197,253,0.25)]">
              <FaWordpress className="text-5xl text-blue-300" />
            </div>
          </motion.div>

          {/* Figma */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-[14%] left-[14%] z-30 hidden sm:block"
          >
            <div className="glass p-5 rounded-3xl border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
              <FaFigma className="text-5xl text-pink-500" />
            </div>
          </motion.div>

          {/* HTML */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-[65%] left-[-5px] sm:left-[-10px] z-30"
          >
            <div className="glass p-3 sm:p-5 rounded-3xl border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.25)]">
              <SiHtml5 className="text-3xl sm:text-5xl text-orange-500" />
            </div>
          </motion.div>

          {/* CSS */}

          <motion.div
            {...floatingAnimation}
            className="absolute top-[70%] right-[16%] z-30 hidden sm:block"
          >
            <div className="glass p-5 rounded-3xl border border-blue-400/20 shadow-[0_0_40px_rgba(96,165,250,0.25)]">
              <FaCss3Alt className="text-5xl text-blue-400" />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;