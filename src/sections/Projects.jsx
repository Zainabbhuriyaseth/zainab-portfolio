import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Ayushman Diagnostics",
    image: "/Project1.png",
    description:
      "Healthcare platform with SSR architecture and responsive UI.",
    github:
      "https://github.com/Zainabbhuriyaseth/AYUSHAMAAN",
    live:
      "https://ayushmaandiagnostics.com",
  },

  {
    title: "Amin Multimedia",
    image: "/Project2.png",
    description:
      "Modern business website with optimized performance and UI.",
    github:
      "https://aminmultimedia.in",
    live:
      "https://aminmultimedia.in",
  },

  {
    title: "VIIRO",
    image: "/Project3.png",
    description:
      "Modern React.js e-commerce platform with responsive design.",
    github:
      "https://github.com/Zainabbhuriyaseth/VIIRO",
    live:
      "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Featured Projects"
          subtitle="My Work"
        />

        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-[30px] overflow-hidden"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="glass px-6 py-3 rounded-full"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;