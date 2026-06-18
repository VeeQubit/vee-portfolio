
import Container from "../common/Container";
import Logo from "../common/Logo";


import { FaDownload } from "react-icons/fa";

function Navbar() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white/70
      backdrop-blur-xl
      border-b
      border-[#E8F8F3]
      shadow-sm
      "
    >
      <Container>

        <nav className="flex h-20 items-center justify-between">

          <Logo />

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-[#2D3748]
                  font-medium
                  transition
                  duration-300
                  hover:text-[#57BA98]
                  "
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">

           

            <a
              href="/resume/Varnaja_Uthayaraj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-2
              px-6
              py-2.5
              rounded-full
              bg-[#57BA98]
              text-white
              shadow-md
              hover:bg-[#65CCB8]
              hover:scale-105
              transition
              duration-300
              "
            >

              <FaDownload />

              Resume

            </a>

          </div>

          {/* Mobile */}

          <button
            className="
            lg:hidden
            text-3xl
            text-[#57BA98]
            "
          >
            ☰
          </button>

        </nav>

      </Container>
    </header>
  );
}

export default Navbar;

