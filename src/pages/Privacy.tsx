import Navigation from "@/components/Navigation";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This is where our privacy practices will be explained in detail.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
