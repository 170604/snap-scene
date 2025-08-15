import { Camera, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/0f2f6718-1a80-49ef-bf00-cf56e0a57c58.png"
                alt="Snaps & Scenes"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              India's premier photography marketplace connecting you with professional photographers across 40+ cities.
            </p>
            <div className="flex space-x-4">
              {/* Instagram Redirect */}
              <a
                href="https://www.instagram.com/snapsandscenes_com?igsh=MXFzazR3YzVwenQzNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/60 hover:text-creative"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>

              <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-creative">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-creative">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/60 hover:text-creative">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-creative">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-creative transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Product Photography</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Food Photography</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Travel Shoots</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Interior Photography</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-creative">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-creative transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Become a Photographer</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-creative transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-creative">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-creative" />
                <span>+91-80888-87703</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-creative" />
                <span>yatishyd363@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-creative mt-1" />
                <span>Mumbai, Delhi, Bangalore<br />& 37 more cities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Snaps & Scenes. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-creative transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-creative transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-creative transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
