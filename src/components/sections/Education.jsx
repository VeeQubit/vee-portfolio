
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

import education from "../../data/education";
import certificates from "../../data/certificates";
import Container from "../common/Container";

function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-transparent"
    >
      <Container>

        <div className="text-center mb-16">

          <p className="text-[#57BA98] font-semibold uppercase">
            Education & Certifications
          </p>

          <h2 className="text-5xl font-bold mt-2 text-[#2D3748]">
            Learning Journey
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white/70
              backdrop-blur-md
              rounded-3xl
              p-8
              shadow-lg
              border
              border-white/40
            "
          >

            <div className="flex items-center gap-3 mb-6">

              <FaGraduationCap className="text-[#57BA98] text-3xl" />

              <h3 className="text-3xl font-bold text-[#2D3748]">
                Education
              </h3>

            </div>

            {education.map((item, index) => (

              <div key={index}>

                <h4 className="text-2xl font-semibold text-[#2D3748]">
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
            className="
              bg-white/70
              backdrop-blur-md
              rounded-3xl
              p-8
              shadow-lg
              border
              border-white/40
            "
          >

            <div className="flex items-center gap-3 mb-6">

              <FaCertificate className="text-[#57BA98] text-3xl" />

              <h3 className="text-3xl font-bold text-[#2D3748]">
                Certifications
              </h3>

            </div>

            <div className="space-y-4">

              {certificates.map((item) => (

                <div
                  key={item}
                  className="
                    bg-[#E8F8F3]
                    text-[#2D3748]
                    p-4
                    rounded-xl
                    shadow
                    transition
                    duration-300
                    hover:bg-[#57BA98]
                    hover:text-white
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

