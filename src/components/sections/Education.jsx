import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

import education from "../../data/education";
import certificates from "../../data/certificates";
import Container from "../common/Container";

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-white"
    >
      <Container>

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase">
            Education & Certifications
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Learning Journey
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-3xl p-8 shadow-lg"
          >

            <div className="flex items-center gap-3 mb-6">

              <FaGraduationCap className="text-orange-500 text-3xl" />

              <h3 className="text-3xl font-bold">
                Education
              </h3>

            </div>

            {education.map((item, index) => (

              <div key={index}>

                <h4 className="text-2xl font-semibold">
                  {item.degree}
                </h4>

                <p className="mt-2">
                  {item.institution}
                </p>

                <p>
                  {item.faculty}
                </p>

                <p className="text-gray-500 mt-2">
                  {item.duration}
                </p>

              </div>

            ))}

          </motion.div>

          {/* Certificates */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-3xl p-8 shadow-lg"
          >

            <div className="flex items-center gap-3 mb-6">

              <FaCertificate className="text-orange-500 text-3xl" />

              <h3 className="text-3xl font-bold">
                Certifications
              </h3>

            </div>

            <div className="space-y-4">

              {certificates.map((item) => (

                <div
                  key={item}
                  className="
                    bg-white
                    p-4
                    rounded-xl
                    shadow
                  "
                >
                  {item}
                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default Education;