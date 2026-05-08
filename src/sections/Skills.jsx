import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaGithub,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiGreensock,
  SiHtml5,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: "text-pink-400",
  },
  {
    name: "GSAP",
    icon: <SiGreensock />,
    color: "text-green-400",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-400",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "WordPress",
    icon: <FaWordpress />,
    color: "text-blue-300",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    color: "text-pink-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute top-20 left-20 w-[300px] h-[300px] bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[120px]" />

      {/* Section Container */}

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[4px] mb-4">
            Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            My
            <span className="gradient-text">
              {" "}Skills
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Combining creativity, frontend engineering,
            smooth animations, and modern development tools
            to craft premium digital experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="glass group relative p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

              {/* Icon */}

              <div
                className={`relative z-10 text-5xl mb-6 ${skill.color}`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}

              <h3 className="relative z-10 text-xl font-semibold text-white">
                {skill.name}
              </h3>

              {/* Bottom Line */}

              <div className="relative z-10 mt-6 h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;