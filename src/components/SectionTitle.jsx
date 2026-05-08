import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="text-purple-400 uppercase tracking-[4px] text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black mt-4">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;