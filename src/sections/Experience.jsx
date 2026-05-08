import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const timeline = [
  {
    year: "2024 - Present",
    title: "B.Sc. Information Technology",
    company: "Shree RamKrishna Institute",
    description:
      "Currently pursuing Information Technology with strong focus on frontend engineering and modern web technologies.",
  },

  {
    year: "2025 - 2026",
    title: "Full Stack Developer Certification",
    company: "EasySkill Career Academy",
    description:
      "Learning advanced full stack development concepts, APIs, databases, and production-grade project architecture.",
  },

  {
    year: "2025",
    title: "Frontend Developer",
    company: "Amin Multimedia",
    description:
      "Designed modern business interfaces with responsive architecture and optimized performance.",
  },

  {
    year: "2025",
    title: "React.js Developer",
    company: "VIIRO",
    description:
      "Built a responsive e-commerce platform focused on premium UI and smooth shopping experience.",
  },
  {
    year: "2026",
    title: "Full Stack Developer",
    company: "AYUSHMAAN Diagnostics",
    description:
      "Developed a modern healthcare diagnostics platform using React.js, Node.js, Express.js, and MongoDB. Built responsive dashboards, dynamic appointment workflows, secure API integrations, and scalable backend architecture. Focused on performance optimization, clean UI engineering, and seamless user experience for medical diagnostic services.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          title="Experience Timeline"
          subtitle="Journey"
        />

        <div className="relative">

          <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-blue-500" />

          <div className="space-y-16">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 glow" />

                <div className="glass rounded-[30px] p-8">

                  <p className="text-purple-400 font-semibold">
                    {item.year}
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <h4 className="text-gray-400 mt-2">
                    {item.company}
                  </h4>

                  <p className="text-gray-400 leading-relaxed mt-6">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;