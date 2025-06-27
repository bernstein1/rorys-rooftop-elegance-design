
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main id="main-content" className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Looks like this page got lost in the city lights. Let's get you back to the rooftop.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <a href="/">Return Home</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <a href="/menu">View Menu</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
