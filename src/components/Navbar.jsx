import { motion } from "framer-motion";

const links = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 px-6 py-4"
    >
      <div className="glass rounded-full max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-black gradient-text">
          ZB.
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="capitalize text-gray-300 hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;