import Navigation from "@/components/Navigation";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground">
          Detailed terms and conditions for using Rory's Rooftop will appear here.
        </p>
      </div>
    </div>
  );
};

export default Terms;
