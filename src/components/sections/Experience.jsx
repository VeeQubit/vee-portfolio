
import { motion } from "framer-motion";

import experience from "../../data/experience";
import Container from "../common/Container";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-orange-50"
    >
      <Container>

        {/* Section Heading */}

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Professional Journey
          </h2>

          <p className="text-gray-500 mt-4">
            My internship and professional development experience.
          </p>

        </div>

        {/* Timeline */}

        <div className="max-w-4xl mx-auto">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                relative
                bg-white
                rounded-3xl
                shadow-lg
                p-8
                mb-10
                border-l-4
                border-orange-500
              "
            >

              <span
                className="
                  absolute
                  -left-3
                  top-10
                  w-5
                  h-5
                  rounded-full
                  bg-orange-500
                "
              ></span>

              <p className="text-orange-500 font-semibold">
                {item.duration}
              </p>

              <h3 className="text-3xl font-bold mt-2">
                {item.position}
              </h3>

              <h4 className="text-xl text-gray-600 mt-1">
                {item.company}
              </h4>

              <p className="text-gray-500 mt-6 leading-8">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {item.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      bg-orange-100
                      text-orange-600
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;

