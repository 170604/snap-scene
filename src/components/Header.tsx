import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleNavigate = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
    } else {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="absolute top-0 left-0 w-full z-50"
      style={{
        background:
          "linear-gradient(to bottom, rgba(43, 59, 49, 0.85), rgba(43, 59, 49, 0))",
      }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src="/assets/1-transparent.png"
                alt="Snaps & Scenes"
                className="h-40 w-auto md:h-48 -mt-6"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex ml-8">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigate("#home")}
                  className="hover:text-creative transition-colors font-medium"
                  style={{ color: "#FDFBD1" }}
                >
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigate("#occasions")}
                  className="hover:text-creative transition-colors font-medium"
                  style={{ color: "#FDFBD1" }}
                >
                  Occasions
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => handleNavigate("#business")}
                  className="hover:text-creative transition-colors font-medium"
                  style={{ color: "#FDFBD1" }}
                >
                  Business
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center space-x-4 ml-auto">
            <div
              className="hidden lg:flex items-center space-x-1 text-sm"
              style={{ color: "#FDFBD1" }}
            >
              <Phone className="h-4 w-4" />
              <a href="tel:+918123840037" className="hover:underline">
                +91 81238 40037
              </a>
            </div>

            <Link to="/contact">
              <Button
                variant="hero"
                className="hidden md:inline-flex"
                style={{
                  color: "#FDFBD1",
                  borderColor: "#FDFBD1",
                }}
              >
                Book Now
              </Button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#2B3B31] text-[#FDFBD1] transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h3 className="text-lg font-bold">Menu</h3>
          <button onClick={() => setMobileOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-6">
          <button
            onClick={() => handleNavigate("#home")}
            className="text-left font-medium hover:text-creative"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("#occasions")}
            className="text-left font-medium hover:text-creative"
          >
            Occasions
          </button>
          <button
            onClick={() => handleNavigate("#business")}
            className="text-left font-medium hover:text-creative"
          >
            Business
          </button>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button
              variant="hero"
              className="w-full mt-4"
              style={{ color: "#FDFBD1", borderColor: "#FDFBD1" }}
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
