
import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Rory's Rooftop</h3>
            <p className="text-background/80 mb-4 max-w-md">
              Elevated dining above the city. Experience cocktails, cuisine, and skyline views 
              in the heart of NYC's Meatpacking District.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rorysrooftop/" className="text-background/80 hover:text-background">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-background/80 hover:text-background">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background">About</a></li>
              <li><a href="#menu" className="text-background/80 hover:text-background">Menu</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-background/80 text-sm">446 W 14th St, NYC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-background/80 text-sm">+1 631-212-8501</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Rory's Rooftop. All rights reserved. | 21+ Only, Valid ID Required
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
