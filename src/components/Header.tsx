import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header
      className="absolute top-0 left-0 w-full z-50"
      style={{
        background: "linear-gradient(to bottom, rgba(43, 59, 49, 0.85), rgba(43, 59, 49, 0))",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="\assets\1-transparent.png"
                alt="Snaps & Scenes"
                className="h-40 w-auto md:h-48 -mt-4" // ✅ Bigger logo
              />
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/#home"
                    className="hover:text-creative transition-colors font-medium"
                    style={{ color: "#FDFBD1" }}
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#occasions"
                    className="hover:text-creative transition-colors font-medium"
                    style={{ color: "#FDFBD1" }}
                  >
                    Occasions
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#business"
                    className="hover:text-creative transition-colors font-medium"
                    style={{ color: "#FDFBD1" }}
                  >
                    Business
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side: Contact info + Buttons */}
          <div className="flex items-center space-x-4 ml-auto">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1" style={{ color: "#FDFBD1" }}>
                <Phone className="h-4 w-4" />
                <span>Contact us</span>
              </div>
            </div>

            {/* Book Now navigates to /contact */}
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

            <Button variant="ghost" size="icon" className="md:hidden" style={{ color: "#FDFBD1" }}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
