
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsOfServiceModal from "./TermsOfServiceModal";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm text-background">
            © 2024 Rory's Rooftop Bar. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <PrivacyPolicyModal />
            <TermsOfServiceModal />
            <a 
              href="/contact" 
              className="text-background hover:text-secondary transition-colors"
              aria-label="Go to contact page"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
