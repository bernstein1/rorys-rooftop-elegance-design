
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-background/90">
            © 2024 Rory's Rooftop Bar. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <PrivacyPolicyModal />
            <TermsOfServiceModal />
            <Link
              to="/contact"
              className="text-background/90 hover:text-secondary transition-colors underline-offset-4 hover:underline"
              aria-label="Go to contact page"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
