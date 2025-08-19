import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Snaps & Scenes" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <a href="#occasions" className="hover:text-yellow-300 transition">Occasions</a>
          <a href="#business" className="hover:text-yellow-300 transition">Business</a>
          <Link to="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded-xl hover:bg-yellow-500 transition">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-20 right-4 left-4 rounded-2xl shadow-xl bg-green-800 text-white overflow-hidden transform transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-6 text-lg font-semibold">
          <Link
            to="/"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <a
            href="#occasions"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Occasions
          </a>
          <a
            href="#business"
            className="hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Business
          </a>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl hover:bg-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
