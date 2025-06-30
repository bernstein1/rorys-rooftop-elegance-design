
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contactInfo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Rory's Rooftop</h3>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Where skyline views, creative cocktails, and an unforgettable vibe meet. Your elevated escape in the heart of the Meatpacking District.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rorysrooftop/" className="text-primary-foreground/80 hover:text-white">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white">About</a></li>
              <li><a href="#menu" className="text-primary-foreground/80 hover:text-white">Menu</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white">Contact</a></li>
              <li>
                <a
                  href="https://www.puttery.com/locations/new-york-city/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white"
                  aria-label="Puttery NYC (opens in a new tab)"
                >
                  Puttery NYC
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span className="text-primary-foreground/80 text-sm">
                  {CONTACT_INFO.addressLines[0]}, NYC
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="text-primary-foreground/80 text-sm">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-primary-foreground/80 text-sm hover:text-white"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center space-y-2">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Rory's Rooftop. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm space-x-2">
            <Link to="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms" className="underline hover:text-white">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
