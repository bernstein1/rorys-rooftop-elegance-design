
import { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load TripleSeat script
    const script = document.createElement('script');
    script.src = 'https://tripleseat.com/api/v1/leads/ts_script.js?lead_form_id=65&pub_id=43729';
    script.async = true;
    script.id = 'tripleseat-script';
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script
      const existingScript = document.getElementById('tripleseat-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Remove any TripleSeat form containers
      const tsContainers = document.querySelectorAll('[id*="tripleseat"], [class*="tripleseat"], [data-tripleseat]');
      tsContainers.forEach(container => container.remove());

      // Clean up global TripleSeat variables with type assertion
      const globalWindow = window as any;
      if (globalWindow.TripleSeat) {
        delete globalWindow.TripleSeat;
      }
      if (globalWindow.ts_load_script) {
        delete globalWindow.ts_load_script;
      }
    };
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Request Information</h3>
      <div id="ts-form-container">
        {/* TripleSeat form will be injected here */}
      </div>
    </div>
  );
};

export default ContactForm;
