
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <div id="main-content" className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Menu</h1>
          <p className="text-center text-muted-foreground">Menu coming soon...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
