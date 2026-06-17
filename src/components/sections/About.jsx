import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import developer from "../../assets/images/developer.png";
import aboutData from "../../data/aboutData";

import Container from "../common/Container";

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative flex justify-center">

  <div className="absolute w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

  <img
    src={developer}
    alt="Developer Illustration"
    className="relative max-w-md w-full"
  />

</div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h5 className="text-orange-500 font-semibold">
              ABOUT ME
            </h5>

            <h2 className="text-5xl font-bold mt-3">
              {aboutData.subtitle}
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              {aboutData.description}
            </p>

            <div className="mt-8 space-y-4">

              {aboutData.points.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-orange-500" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <button
              className="
              mt-10
              bg-orange-500
              text-white
              px-8
              py-3
              rounded-xl
              hover:bg-orange-600
              transition
              "
            >
              Download CV
            </button>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default About;