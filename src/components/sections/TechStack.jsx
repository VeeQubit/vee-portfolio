import { motion } from "framer-motion";
import Container from "../common/Container";
import techStack from "../../data/techStack";

function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 bg-orange-50"
    >
      <Container>

        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase">
            Tech Stack
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Tools & Technologies
          </h2>

          <p className="text-gray-500 mt-4">
            Technologies I use to build modern applications.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-16">

          {techStack.map((tech) => (

            <motion.div
              key={tech}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                p-6
                text-center
              "
            >

              <h3 className="font-semibold">
                {tech}
              </h3>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TechStack;