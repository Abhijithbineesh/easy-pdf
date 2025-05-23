import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-blue-950 to-blue-900 text-blue-200 py-6 px-4 flex flex-col md:flex-col items-center justify-between gap-4 border-t border-blue-800">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Created by{" "}
        <span className="font-semibold text-blue-400">Abhijith K B</span>
      </p>
      <a
        href="https://github.com/Abhijithbineesh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-300 hover:text-white transition"
      >
        <FaGithub className="w-5 h-5" />
        <span className="text-sm md:text-base">Abhijithbineesh</span>
      </a>
    </footer>
  );
}
