
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

import Container from "../common/Container";
import services from "../../data/services";

const icons = [
  <FaShieldAlt />,
  <FaLaptopCode />,
  <FaServer />,
  <FaDatabase />,
  <FaMobileAlt />,
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-orange-50"
    >
      <Container>

        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase">
            What I Do
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Areas of Expertise
          </h2>

          <p className="text-gray-500 mt-4">
            Technologies and solutions I enjoy building.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                text-center
              "
            >

              <div className="text-5xl text-orange-500 mb-6 flex justify-center">
                {icons[index]}
              </div>

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Services;

