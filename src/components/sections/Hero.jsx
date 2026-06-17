import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import heroData from "../../data/heroData";
import Container from "../common/Container";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="text-orange-500 font-semibold text-lg">
              {heroData.greeting}
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold mt-2">
              {heroData.name}
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Frontend Developer",
                1500,
                "Backend Developer",
                1500,
                "UI Enthusiast",
                1500,
              ]}
              speed={40}
              repeat={Infinity}
              className="text-2xl text-orange-500 font-bold mt-6 block"
            />

            <p className="text-gray-600 mt-6 leading-8 max-w-xl">
              {heroData.description}
            </p>

            <div className="flex gap-5 mt-8">

              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">
                Hire Me
              </button>

              <button className="border border-orange-500 px-6 py-3 rounded-xl hover:bg-orange-50 transition">
                View Projects
              </button>

            </div>

            <div className="flex gap-6 text-2xl mt-10 text-gray-700">

              <a href={heroData.github}>
                <FaGithub />
              </a>

              <a href={heroData.linkedin}>
                <FaLinkedin />
              </a>

              <a href={heroData.email}>
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <div className="w-[320px] h-[320px] rounded-full bg-orange-200 flex items-center justify-center shadow-2xl">

              <span className="text-8xl">
                👨‍💻
              </span>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Hero;