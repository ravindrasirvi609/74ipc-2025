import { useEffect } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const useRazorpay = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.Razorpay) return; // Already loaded

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay SDK loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
    };

    document.body.appendChild(script);

    return () => {
      // Optional: remove when component unmounts
      try {
        document.body.removeChild(script);
      } catch (error) {
        // Script might already be removed
      }
    };
  }, []);

  const openCheckout = (options: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (!window.Razorpay) {
        reject(new Error("Razorpay SDK not loaded"));
        return;
      }

      const rzp = new window.Razorpay({
        ...options,
        handler: (response: any) => {
          resolve(response);
        },
        modal: {
          ondismiss: () => {
            reject(new Error("Payment cancelled by user"));
          },
        },
      });

      rzp.open();
    });
  };

  return { openCheckout };
};
