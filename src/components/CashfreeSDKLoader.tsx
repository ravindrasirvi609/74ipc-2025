"use client";

import { useEffect } from "react";

const CashfreeSDKLoader = () => {
  useEffect(() => {
    // Function to dynamically load Cashfree SDK
    const loadCashfreeSDK = () => {
      // Check if SDK is already loaded
      if ((window as any).Cashfree) {
        console.log("Cashfree SDK already loaded");
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        // Check if script tag already exists
        const existingScript = document.querySelector(
          'script[src*="cashfree.js"]'
        );
        if (existingScript) {
          console.log("Cashfree script tag exists, waiting for load...");
          // Wait for existing script to load
          const checkLoad = setInterval(() => {
            if ((window as any).Cashfree) {
              clearInterval(checkLoad);
              resolve(true);
            }
          }, 100);

          // Timeout after 10 seconds
          setTimeout(() => {
            clearInterval(checkLoad);
            reject(new Error("Cashfree SDK load timeout"));
          }, 10000);
          return;
        }

        // Create and load script dynamically
        const script = document.createElement("script");
        script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
        script.async = true;
        script.crossOrigin = "anonymous";

        script.onload = () => {
          console.log("Cashfree SDK loaded dynamically");
          // Wait a bit for SDK to initialize
          setTimeout(() => {
            if ((window as any).Cashfree) {
              resolve(true);
            } else {
              reject(new Error("Cashfree SDK not available after load"));
            }
          }, 500);
        };

        script.onerror = () => {
          reject(new Error("Failed to load Cashfree SDK"));
        };

        document.head.appendChild(script);
      });
    };

    // Try to load SDK
    loadCashfreeSDK()
      .then(() => {
        console.log("✅ Cashfree SDK loaded successfully");
        console.log(
          "Available methods:",
          Object.keys((window as any).Cashfree || {})
        );
      })
      .catch((error) => {
        console.error("❌ Failed to load Cashfree SDK:", error);

        // Try alternative CDN URLs as fallback
        const tryAlternativeSDK = async () => {
          const alternativeUrls = [
            "https://sdk.cashfree.com/js/v3/cashfree.js",
            "https://sdk.cashfree.com/js/cashfree.js", // Alternative version
            "https://cdn.jsdelivr.net/npm/@cashfreepayments/cashfree-js@latest/dist/cashfree.js", // CDN fallback
          ];

          for (const url of alternativeUrls) {
            try {
              console.log("Trying alternative URL:", url);
              const script = document.createElement("script");
              script.src = url;
              script.async = true;

              await new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
              });

              // Check if Cashfree is now available
              if ((window as any).Cashfree) {
                console.log(
                  "✅ Cashfree SDK loaded from alternative URL:",
                  url
                );
                break;
              }
            } catch (err) {
              console.log("Failed to load from:", url);
            }
          }
        };

        tryAlternativeSDK();
      });
  }, []);

  return null; // This component doesn't render anything
};

export default CashfreeSDKLoader;
