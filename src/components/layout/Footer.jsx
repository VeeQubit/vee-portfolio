
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import Container from "../common/Container";
import contactData from "../../data/contactData";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>

        <div className="text-center">

          <h2 className="text-3xl font-bold">
            Varnaja Uthayaraj
          </h2>

          <p className="text-gray-400 mt-3">
            Full Stack Developer | Software Engineer
          </p>

          <div className="flex justify-center gap-8 mt-8">

            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-orange-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>

          </div>

          <div className="flex justify-center gap-6 text-2xl mt-8">

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${contactData.email}`}
              className="hover:text-orange-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

          <div className="border-t border-gray-700 mt-10 pt-6">

            <p className="text-gray-400">
              © 2026 All Rights Reserved.
            </p>

            <p className="mt-2 flex justify-center items-center gap-2 text-gray-400">
              Made with
              <FaHeart className="text-red-500" />
              using React & Tailwind CSS
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;

