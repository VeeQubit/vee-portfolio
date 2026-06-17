import { motion } from "framer-motion";

import skills from "../../data/skills";
import Container from "../common/Container";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white"
    >
      <Container>

        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Technologies I Work With
          </h2>

          <p className="text-gray-500 mt-4">
            Modern technologies used for building full stack applications.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {skills.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="
                bg-orange-50
                rounded-3xl
                p-8
                shadow-lg
              "
            >

              <h3 className="text-2xl font-bold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">

                {group.items.map((item) => (

                  <span
                    key={item}
                    className="
                      bg-white
                      px-5
                      py-2
                      rounded-full
                      shadow
                      hover:bg-orange-500
                      hover:text-white
                      transition
                    "
                  >
                    {item}
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

export default Skills;