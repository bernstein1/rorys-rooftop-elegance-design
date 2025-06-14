import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Update menu and home links
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 shadow backdrop-blur transition-colors"
      style={{ backgroundColor: "hsl(46, 46%, 95%)" }} // Force beige for navbar
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/lovable-uploads/6ec2b153-5a0d-4d69-aa6d-d931b2fb9079.png"
                alt="Rory's Rooftop Bar Logo"
                className="h-12 md:h-14 w-auto object-contain"
                style={{ maxHeight: "56px" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-lg text-foreground/90 hover:text-primary font-medium transition-colors px-3 py-1 ${
                  item.name === "Events" || item.name === "Blog"
                    ? "story-link"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className="ml-8 bg-primary text-primary-foreground shadow-md px-8 py-3"
              size="lg"
            >
              <a href="https://resy.com/rorysrooftop" target="_blank" rel="noopener noreferrer">
                Make Reservation
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="border border-primary text-primary"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-3 pt-2 pb-4 space-y-1 sm:px-3 bg-background border-b border-border">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-lg font-medium px-3 py-2 rounded-md text-foreground/90 hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full bg-primary text-primary-foreground px-8 py-3" size="lg">
              <a href="https://resy.com/rorysrooftop" target="_blank" rel="noopener noreferrer">
                Make Reservation
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
