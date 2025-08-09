import { useEffect, useState } from "react";

export type TripleSeatStatus = "idle" | "loading" | "ready" | "error";

interface UseTripleSeatEmbedOptions {
  containerId: string;
  leadFormId: number | string;
  publicKey: string;
  inline?: boolean;
  loadTimeoutMs?: number;
}

export function useTripleSeatEmbed({
  containerId,
  leadFormId,
  publicKey,
  inline = true,
  loadTimeoutMs = 12000,
}: UseTripleSeatEmbedOptions): { status: TripleSeatStatus; error: string | null } {
  const [status, setStatus] = useState<TripleSeatStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById(containerId);
    if (!container) {
      setStatus("error");
      setError("TripleSeat form container not found");
      return;
    }

    setStatus("loading");
    setError(null);

    // Clean container of previously injected content
    try {
      container
        .querySelectorAll('[id^="tripleseat"], [class*="tripleseat"]')
        .forEach((el) => el.remove());
    } catch {}

    // Remove existing script to avoid duplicates / stale embeds
    const existingScript = document.getElementById("tripleseat-script");
    if (existingScript && existingScript.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }
    if ((window as any).TripleSeat) {
      delete (window as any).TripleSeat;
    }

    let isReady = false;
    const markReady = () => {
      if (!isReady) {
        isReady = true;
        setStatus("ready");
      }
    };

    // Observe DOM for the injected form and move it into our container
    const observer = new MutationObserver(() => {
      const form = document.getElementById("tripleseat_embed_form_inline");
      if (form && container && !container.contains(form)) {
        container.appendChild(form);
        (form as HTMLElement).setAttribute("data-tripleseat-scoped", "true");
        markReady();
      } else if (form && container && container.contains(form)) {
        markReady();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Inject TripleSeat script
    const script = document.createElement("script");
    const params = new URLSearchParams({
      lead_form_id: String(leadFormId),
      public_key: publicKey,
      inline_form: inline ? "true" : "false",
    });
    script.src = `https://api.tripleseat.com/v1/leads/ts_script.js?${params.toString()}`;
    script.async = true;
    script.id = "tripleseat-script";
    script.onerror = () => {
      setStatus("error");
      setError("Failed to load TripleSeat form");
    };
    document.body.appendChild(script);

    const timeout = window.setTimeout(() => {
      if (!isReady) {
        setStatus("error");
        setError("TripleSeat form took too long to load");
      }
    }, loadTimeoutMs);

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();

      // Remove script
      const scriptEl = document.getElementById("tripleseat-script");
      if (scriptEl && document.body.contains(scriptEl)) {
        document.body.removeChild(scriptEl);
      }

      // Remove injected elements
      const injectedForm = document.getElementById("tripleseat_embed_form_inline");
      if (injectedForm && injectedForm.parentElement) {
        injectedForm.parentElement.removeChild(injectedForm);
      }
      const link = document.getElementById("tripleseat_link");
      if (link && link.parentElement && link.closest(`#${containerId}`)) {
        link.parentElement.removeChild(link);
      }

      if ((window as any).TripleSeat) {
        delete (window as any).TripleSeat;
      }
    };
  }, [containerId, leadFormId, publicKey, inline, loadTimeoutMs]);

  return { status, error };
}

export default useTripleSeatEmbed;
