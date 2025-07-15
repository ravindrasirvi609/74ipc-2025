"use client";

import { useEffect, useState } from "react";

export default function CashfreeSDKStatus() {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSDK = () => {
      if (typeof window !== "undefined") {
        if ((window as any).Cashfree) {
          console.log("✅ Cashfree SDK is available");
          setSdkLoaded(true);

          // Test SDK initialization
          try {
            const cashfree = (window as any).Cashfree({
              mode: "sandbox",
            });
            console.log("✅ Cashfree SDK initialized successfully:", cashfree);
          } catch (error) {
            console.error("❌ Cashfree SDK initialization error:", error);
            setError("SDK initialization failed");
          }
        } else {
          console.log("❌ Cashfree SDK not loaded yet");
          setSdkLoaded(false);
        }
      }
    };

    // Check immediately
    checkSDK();

    // Check again after a delay to ensure SDK has time to load
    const timer = setTimeout(checkSDK, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        Cashfree SDK Status
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${sdkLoaded ? "bg-green-500" : "bg-red-500"}`}
          />
          <span className="text-sm">
            SDK Loaded: {sdkLoaded ? "✅ Yes" : "❌ No"}
          </span>
        </div>
        {error && <div className="text-red-600 text-sm">Error: {error}</div>}
        <button
          onClick={() => window.location.reload()}
          className="text-blue-600 text-sm underline hover:text-blue-800"
        >
          Refresh Status
        </button>
      </div>
    </div>
  );
}
