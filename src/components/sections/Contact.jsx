
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../common/Container";
import contactData from "../../data/contactData";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ic1n71d",
        "template_4hku6vs",
        form.current,
        "V6PY8zshduzNSZJiI"
      )
      .then(() => {
        toast.success("Message sent successfully!");

        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message!");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <Container>

        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold uppercase">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-2">
            Get In Touch
          </h2>

          <p className="text-gray-500 mt-4">
            Have a project or opportunity? Feel free to contact me.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-2xl" />
              <span>{contactData.email}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-500 text-2xl" />
              <span>{contactData.phone}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-2xl" />
              <span>{contactData.location}</span>
            </div>

            <div className="flex gap-6 text-3xl pt-4">

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-4
                rounded-xl
                border
                outline-none
                focus:border-orange-500
              "
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="
                w-full
                p-4
                rounded-xl
                border
                outline-none
                focus:border-orange-500
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                p-4
                rounded-xl
                border
                outline-none
                focus:border-orange-500
              "
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="
                w-full
                p-4
                rounded-xl
                border
                outline-none
                resize-none
                focus:border-orange-500
              "
            ></textarea>

            <button
              type="submit"
              className="
                bg-orange-500
                hover:bg-orange-600
                hover:scale-105
                transition
                duration-300
                text-white
                px-8
                py-3
                rounded-xl
                shadow-lg
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}

export default Contact;

