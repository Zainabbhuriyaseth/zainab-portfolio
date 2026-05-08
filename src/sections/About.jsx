import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const cards = [
  {
    title: "Frontend Engineering",
    text: "Building immersive modern UI experiences with React.js and premium animations.",
  },
  {
    title: "Responsive Design",
    text: "Creating seamless experiences across mobile, tablet, and desktop devices.",
  },
  {
    title: "Performance Focused",
    text: "Optimized layouts, clean architecture, and smooth frontend interactions.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold leading-tight">
              Full Stack Developer &
              <span className="gradient-text">
                {" "}Creative UI Engineer
              </span>
            </h3>

            <p className="mt-8 text-gray-400 leading-relaxed text-lg">
              Motivated Full Stack Developer with hands-on
              experience building real-world web applications
              using React.js, Node.js, MongoDB, and EJS.
              Delivered live projects including healthcare
              platforms and modern responsive business websites.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              Currently pursuing B.Sc. Information Technology
              while continuously improving frontend engineering,
              UI/UX optimization, and performance-focused
              development.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="glass rounded-3xl p-6 text-center">
                <h4 className="text-4xl font-black gradient-text">
                  3+
                </h4>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>
              </div>

              <div className="glass rounded-3xl p-6 text-center">
                <h4 className="text-4xl font-black gradient-text">
                  2+
                </h4>

                <p className="text-gray-400 mt-2">
                  Years Learning
                </p>
              </div>

              <div className="glass rounded-3xl p-6 text-center">
                <h4 className="text-4xl font-black gradient-text">
                  100%
                </h4>

                <p className="text-gray-400 mt-2">
                  Passion
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 hover:scale-[1.02] transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;