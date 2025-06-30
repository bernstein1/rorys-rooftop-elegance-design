import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="bg-background min-h-screen w-full pb-16 overflow-x-hidden">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-8 space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground">
          These terms govern your use of Rory's Rooftop website and services. By accessing our site, you agree to these terms.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Use of Our Site</h2>
        <p>
          Content provided is for informational purposes. You may not copy or redistribute material without permission.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Liability</h2>
        <p>
          We strive for accuracy, but the site is provided "as is" without warranties. Rory's Rooftop is not liable for damages arising from use of this site.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Changes</h2>
        <p>
          We may update these terms occasionally. Continued use of the site means you accept the revised terms.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
