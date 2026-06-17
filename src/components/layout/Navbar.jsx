import Container from "../common/Container";
import Logo from "../common/Logo";

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <Logo />

          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-orange-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">

            <button className="rounded-lg border px-4 py-2 hover:bg-orange-50">
              🌙
            </button>

            <button className="rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">
              Resume
            </button>

          </div>

          <button className="lg:hidden text-3xl">
            ☰
          </button>

        </nav>
      </Container>
    </header>
  );
}

export default Navbar;