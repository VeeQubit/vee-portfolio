import { FaLeaf } from "react-icons/fa";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 text-3xl font-extrabold tracking-wide"
    >
      <FaLeaf className="text-[#57BA98]" />

      <span className="text-[#57BA98] hover:text-[#65CCB8] transition">
        Varnaja
      </span>
    </a>
  );
}

export default Logo;