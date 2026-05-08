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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030014] px-6 pt-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-700/20 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-700/20 blur-[180px]" />

      {/* Main Container */}

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20"
        >
          {/* Availability Badge */}

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            <p className="uppercase tracking-[4px] text-sm text-purple-300 font-medium">
              Available For Work
            </p>
          </div>

          {/* Heading */}

          <h1 className="text-[60px] sm:text-[80px] lg:text-[100px] font-black leading-[0.95] tracking-[-4px]">
            <span className="text-white">
              Zainabbibi
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-blue-500 bg-clip-text text-transparent">
              Bhuriyaseth
            </span>
          </h1>

          {/* Typewriter */}

          <div className="mt-8 text-2xl md:text-3xl font-semibold text-gray-200 h-[40px]">
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

          <p className="mt-8 text-gray-400 text-lg leading-[1.9] max-w-2xl">
            Building premium futuristic digital experiences
            with immersive UI engineering, smooth animations,
            creative frontend architecture, and modern React.js
            development.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#projects"
              className="relative overflow-hidden group px-9 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">
                View Projects
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Download CV
            </a>

          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-16 mt-16">

            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                3+
              </h3>

              <p className="mt-3 text-gray-400">
                Live Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                2+
              </h3>

              <p className="mt-3 text-gray-400">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
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
          className="relative flex justify-center items-center"
        >
          {/* Glow Behind */}

          <div className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-[120px]" />

          {/* Rotating Border */}

          <div className="pointer-events-none absolute w-[480px] h-[480px] rounded-full border border-purple-500/20 animate-spin-slow" />

          {/* Profile Image */}

          <img
            ref={imageRef}
            src="/profile.jpg"
            alt="profile"
            className="relative z-20 w-[330px] sm:w-[400px] lg:w-[440px] h-[500px] sm:h-[580px] object-cover rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.45)]"
          />

          {/* Floating Skill Icons */}

          {/* React */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute top-10 left-0 z-30"
          >
            <div className="glass p-5 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <FaReact className="text-5xl text-cyan-400" />
            </div>
          </motion.div>

          {/* JavaScript */}

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="absolute top-24 right-0 z-30"
          >
            <div className="glass p-5 rounded-3xl border border-yellow-500/20 shadow-[0_0_40px_rgba(250,204,21,0.25)]">
              <FaJs className="text-5xl text-yellow-400" />
            </div>
          </motion.div>

          {/* GitHub */}

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
            }}
            className="absolute bottom-16 left-5 z-30"
          >
            <div className="glass p-5 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <FaGithub className="text-5xl text-white" />
            </div>
          </motion.div>

          {/* TypeScript */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.3,
            }}
            className="absolute bottom-20 right-0 z-30"
          >
            <div className="glass p-5 rounded-3xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <SiTypescript className="text-5xl text-blue-400" />
            </div>
          </motion.div>

          {/* Tailwind */}

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.8,
            }}
            className="absolute top-[42%] right-12 z-30"
          >
            <div className="glass p-5 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <SiTailwindcss className="text-5xl text-cyan-300" />
            </div>
          </motion.div>

          {/* Node.js */}

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.1,
            }}
            className="absolute top-[45%] left-[-20px] z-30"
          >
            <div className="glass p-5 rounded-3xl border border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.25)]">
              <FaNodeJs className="text-5xl text-green-500" />
            </div>
          </motion.div>

          {/* MongoDB */}

          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.6,
            }}
            className="absolute bottom-[35%] right-[-10px] z-30"
          >
            <div className="glass p-5 rounded-3xl border border-green-400/20 shadow-[0_0_40px_rgba(74,222,128,0.25)]">
              <SiMongodb className="text-5xl text-green-400" />
            </div>
          </motion.div>

          {/* WordPress */}

          <motion.div
            animate={{ y: [0, -13, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.4,
            }}
            className="absolute bottom-[10%] left-[20%] z-30"
          >
            <div className="glass p-5 rounded-3xl border border-blue-300/20 shadow-[0_0_40px_rgba(147,197,253,0.25)]">
              <FaWordpress className="text-5xl text-blue-300" />
            </div>
          </motion.div>

          {/* Figma */}

          <motion.div
            animate={{ y: [0, -17, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.7,
            }}
            className="absolute top-[15%] left-[15%] z-30"
          >
            <div className="glass p-5 rounded-3xl border border-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
              <FaFigma className="text-5xl text-pink-500" />
            </div>
          </motion.div>

          {/* HTML5 */}

          <motion.div
            animate={{ y: [0, -11, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
            }}
            className="absolute top-[65%] left-[-10px] z-30"
          >
            <div className="glass p-5 rounded-3xl border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.25)]">
              <SiHtml5 className="text-5xl text-orange-500" />
            </div>
          </motion.div>

          {/* CSS3 */}

          <motion.div
            animate={{ y: [0, -13, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="absolute top-[70%] right-[18%] z-30"
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