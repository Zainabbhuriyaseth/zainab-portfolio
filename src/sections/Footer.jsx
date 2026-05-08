const Footer = () => {
  return (
    <footer className="px-6 pb-10">

      <div className="max-w-7xl mx-auto glass rounded-[30px] p-8 flex flex-col md:flex-row items-center justify-between">

        <h2 className="text-3xl font-black gradient-text">
          ZB.
        </h2>

        <p className="text-gray-400 mt-4 md:mt-0 text-center">
          © 2026 Zainabbibi N. Bhuriyaseth.
          All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#home"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Contact
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;