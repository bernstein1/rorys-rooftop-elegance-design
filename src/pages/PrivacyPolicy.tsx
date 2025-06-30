import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div id="main" className="bg-background min-h-screen w-full pb-16 overflow-x-hidden">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 pt-32 pb-8 space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This page explains how Rory's Rooftop collects, uses, and protects your data when you visit our website or sign up for updates.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
        <p>
          We collect the information you choose to provide, such as your email address for our mailing list, and basic analytics about how you use our site.
        </p>
        <h2 className="text-2xl font-semibold mt-6">How We Use Information</h2>
        <p>
          Your information is used solely to provide our services—for example, sending newsletters or responding to inquiries. We do not sell your data.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Contact Form</h2>
        <p>
          Our contact page embeds an event inquiry form using a script from
          Tripleseat. The script loads from Tripleseat&apos;s servers and allows us
          to process your booking requests. When you interact with the form,
          Tripleseat may set cookies or collect information according to
          their{' '}
          <a
            href="https://tripleseat.com/privacy-policy"
            className="underline text-primary"
          >
            privacy policy
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
        <p>
          We use a few first-party cookies and storage items to improve your
          experience. The <code>sidebar:state</code> cookie remembers whether the
          navigation sidebar is expanded or collapsed. We also store your cookie
          consent preference in local storage so the banner does not reappear.
          For more details, please see our Cookie Policy.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Your Choices</h2>
        <p>
          You can unsubscribe from emails at any time or contact us with privacy questions. Continued use of our site signifies consent to this policy.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
