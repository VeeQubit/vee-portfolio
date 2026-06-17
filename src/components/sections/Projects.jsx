
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import projects from "../../data/projects";
import Container from "../common/Container";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white"
    >
      <Container>

        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-4">
            Some projects that demonstrate my technical skills and practical experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-56
                  object-cover
                "
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        bg-orange-100
                        text-orange-600
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      bg-orange-500
                      text-white
                      py-3
                      rounded-xl
                      flex
                      justify-center
                      items-center
                      gap-2
                      hover:bg-orange-600
                      transition
                    "
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      border
                      border-orange-500
                      py-3
                      rounded-xl
                      flex
                      justify-center
                      items-center
                      gap-2
                      hover:bg-orange-50
                      transition
                    "
                  >
                    <FaExternalLinkAlt />

                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;

