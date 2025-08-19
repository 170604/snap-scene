import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2d3d1f] text-[#FDFBD1]">
      <div className="container mx-auto px-6 py-12">
        {/* Logo + Social Icons Centered */}
        <div className="text-center mb-10">
          <img
            src="/assets/1-transparent.png"
            alt="Snaps & Scenes"
            className="mx-auto h-40 mb-6"   // 🔥 Increased logo size
          />
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:text-creative">
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/snapsandscenes_com?igsh=MXFzazR3YzVwenQzNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-creative"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-creative">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="hover:text-creative">
              <Twitter className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Occasions */}
          <div>
            <h3 className="font-bold text-lg mb-3">Occasions</h3>
            <ul className="space-y-2">
              <li><Link to="/wedding" className="hover:text-creative">Wedding</Link></li>
              <li><Link to="/pre-wedding" className="hover:text-creative">Pre Wedding</Link></li>
              <li><Link to="/maternity" className="hover:text-creative">Maternity</Link></li>
              <li><Link to="/baby" className="hover:text-creative">Baby & Kids</Link></li>
              <li><Link to="/vacation" className="hover:text-creative">Vacation</Link></li>
              <li><Link to="/parties" className="hover:text-creative">Parties</Link></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold text-lg mb-3">Business</h3>
            <ul className="space-y-2">
              <li><Link to="/food" className="hover:text-creative">Food</Link></li>
              <li><Link to="/interior" className="hover:text-creative">Interior</Link></li>
              <li><Link to="/product" className="hover:text-creative">Product Shoot</Link></li>
              <li><Link to="/corporate" className="hover:text-creative">Corporate Events</Link></li>
              <li><Link to="/brand-video" className="hover:text-creative">Brand Video</Link></li>
              <li><Link to="/profile" className="hover:text-creative">Profile & Headshot</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a href="mailto:info@snapsnscenes.com" className="hover:text-creative">
                  info@snapsnscenes.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+911234567890" className="hover:text-creative">
                  +91 1234567890
                </a>
              </li>
              <li>Address: 123 Studio Lane, Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#FDFBD1]/20 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Snaps & Scenes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
