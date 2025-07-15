"use client";

import { useEffect, useState } from "react";

const CashfreeDebug = () => {
  const [cashfreeStatus, setCashfreeStatus] = useState("Checking...");
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    const checkCashfree = () => {
      if (typeof window !== "undefined") {
        // Check for script tags
        const scriptTags = document.querySelectorAll('script[src*="cashfree"]');
        console.log("Found Cashfree script tags:", scriptTags.length);

        if ((window as any).Cashfree) {
          if (typeof (window as any).Cashfree.checkout === "function") {
            setCashfreeStatus(
              "✅ Cashfree SDK loaded and checkout function available"
            );
          } else if (typeof (window as any).Cashfree.redirect === "function") {
            setCashfreeStatus(
              "✅ Cashfree SDK loaded with redirect function (v2 style)"
            );
          } else {
            setCashfreeStatus(
              "⚠️ Cashfree object exists but no recognized payment functions"
            );
          }
          console.log("Cashfree object:", (window as any).Cashfree);
          console.log(
            "Available methods:",
            Object.keys((window as any).Cashfree)
          );
        } else {
          setCashfreeStatus(
            `❌ Cashfree SDK not loaded (${scriptTags.length} script tags found)`
          );

          // Try to reload the SDK
          if (scriptTags.length === 0) {
            console.log("No Cashfree scripts found, attempting to load...");
            const script = document.createElement("script");
            script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
            script.async = true;
            script.onload = () => {
              console.log("Cashfree SDK loaded via debug component");
              checkCashfree();
            };
            script.onerror = () => {
              console.error("Failed to load Cashfree SDK via debug component");
            };
            document.head.appendChild(script);
          }
        }
      } else {
        setCashfreeStatus("❌ Window object not available");
      }
    };

    // Check immediately
    checkCashfree();

    // Check every 2 seconds for 20 seconds
    const interval = setInterval(checkCashfree, 2000);
    setTimeout(() => clearInterval(interval), 20000);

    return () => clearInterval(interval);
  }, []);

  const testCheckout = () => {
    if ((window as any).Cashfree) {
      setTestResult(
        `Cashfree object found. Available methods: ${Object.keys((window as any).Cashfree).join(", ")}`
      );

      if (typeof (window as any).Cashfree.checkout === "function") {
        try {
          // Test with a dummy session ID - this will fail but shows the function works
          setTestResult(
            "✅ Cashfree.checkout function is available and callable"
          );
        } catch (error) {
          setTestResult(`❌ Cashfree.checkout function error: ${error}`);
        }
      } else if (typeof (window as any).Cashfree.redirect === "function") {
        setTestResult("✅ Cashfree.redirect function is available (v2 style)");
      } else {
        setTestResult("❌ No recognized Cashfree payment functions found");
      }
    } else {
      setTestResult("❌ Cashfree object not found");
    }
  };

  const testDirectURL = () => {
    // Test with a sample session ID format
    const testSessionId = "session_test123";
    const baseUrl =
      process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT === "sandbox"
        ? "https://payments.sandbox.cashfree.com"
        : "https://payments.cashfree.com";

    const testUrl = `${baseUrl}/pay/order/authenticate/${testSessionId}`;
    setTestResult(`Test URL constructed: ${testUrl}`);
    console.log("Test payment URL:", testUrl);
  };

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "white",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "12px",
        maxWidth: "350px",
        zIndex: 9999,
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <h4>Cashfree Debug</h4>
      <p>
        <strong>Status:</strong> {cashfreeStatus}
      </p>
      <div style={{ marginBottom: "5px" }}>
        <button
          onClick={testCheckout}
          style={{
            background: "#007bff",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "11px",
            marginRight: "5px",
          }}
        >
          Test SDK
        </button>
        <button
          onClick={testDirectURL}
          style={{
            background: "#28a745",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "3px",
            cursor: "pointer",
            fontSize: "11px",
          }}
        >
          Test URL
        </button>
      </div>
      {testResult && (
        <p
          style={{ marginTop: "5px", fontSize: "11px", wordBreak: "break-all" }}
        >
          <strong>Test Result:</strong> {testResult}
        </p>
      )}
    </div>
  );
};

export default CashfreeDebug;
