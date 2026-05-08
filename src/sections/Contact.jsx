import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          title="Let's Work Together"
          subtitle="Contact"
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[40px] p-14 text-center"
        >
          <h3 className="text-5xl font-black leading-tight">
            Have A Project In Mind?
          </h3>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-2xl mx-auto">
            I’m always open to discussing creative ideas,
            premium frontend experiences, and modern React.js projects.
          </p>

          <a
            href="mailto:bhuriyasethzainabbibi@gmail.com"
            className="inline-block mt-10 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 glow text-lg"
          >
            Send Me An Email
          </a>

          <div className="flex justify-center gap-8 mt-14">

            <a
              href="https://github.com/Zainabbhuriyaseth"
              target="_blank"
              className="glass w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/zainabbibi-bhuriyaseth-a70809349"
              target="_blank"
              className="glass w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bhuriyasethzainabbibi@gmail.com"
              className="glass w-16 h-16 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;