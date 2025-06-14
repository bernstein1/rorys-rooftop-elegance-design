import { Instagram, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Rory's Rooftop</h3>
            <p className="text-primary-foreground/90 mb-4 max-w-md">
              Elevated dining above the city. Experience cocktails, cuisine, and skyline views 
              in the heart of NYC's Meatpacking District.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rorysrooftop/" className="text-primary-foreground/80 hover:text-white">
                <Instagram className="w-5 h-5" />
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">446 W 14th St, NYC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">+1 631-212-8501</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@rorysrooftop.com" className="text-primary-foreground/80 text-sm hover:text-white">hello@rorysrooftop.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Rory's Rooftop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
