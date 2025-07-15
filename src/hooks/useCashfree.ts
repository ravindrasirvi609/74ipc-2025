// hooks/useCashfree.ts
import { useEffect } from "react";

export const useCashfree = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ((window as any).Cashfree) return; // already loaded

    const script = document.createElement("script");
    script.src =
      process.env.NEXT_PUBLIC_CASHFREE_ENV === "sandbox"
        ? "https://sdk.cashfree.com/js/v3/cashfree.js"
        : "https://sdk.cashfree.com/js/v3/cashfree.sandbox.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // optional: remove when unmount
      document.body.removeChild(script);
    };
  }, []);
};
