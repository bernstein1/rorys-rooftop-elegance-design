import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div id="main" className="bg-background min-h-screen w-full pb-16 overflow-x-hidden">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-8 space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground">
          This page explains how Rory's Rooftop uses cookies and similar technologies on our website.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Site Preferences</h2>
        <p>
          We store your sidebar preference in a cookie named <code>sidebar:state</code> which is set in
          <code>src/components/ui/sidebar.tsx</code>. This cookie simply remembers whether the sidebar is expanded or
          collapsed and expires after one week.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Cookie Consent</h2>
        <p>
          When you accept cookies, we record this choice in <code>localStorage</code> under the key
          <code>cookieConsent</code> (see <code>src/components/CookieBanner.tsx</code>). This prevents the banner from
          showing on subsequent visits.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Third‑Party Cookies</h2>
        <p>
          Our events inquiry form loads a script from Tripleseat which may set its own cookies. For details about these
          cookies, please see <a href="https://www.tripleseat.com/privacy/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Tripleseat’s privacy policy</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
