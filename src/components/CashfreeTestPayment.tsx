"use client";

import { useState } from "react";

const CashfreeTestPayment = () => {
  const [sessionId, setSessionId] = useState("");
  const [mode, setMode] = useState("production"); // Changed default to production
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [creatingSession, setCreatingSession] = useState(false);
  const [amount, setAmount] = useState(100); // default test amount

  const handleOpenPayment = async () => {
    setError(null);
    setLoading(true);
    console.log("🚀 Starting payment popup test...");
    console.log("Session ID:", sessionId);
    console.log("Mode:", mode);

    try {
      if (!sessionId) {
        setError("Please enter a paymentSessionId");
        setLoading(false);
        return;
      }

      console.log("Checking Cashfree SDK...");
      if (typeof window === "undefined" || !(window as any).Cashfree) {
        console.error("❌ Cashfree SDK not available");
        setError("Cashfree SDK not loaded. Please refresh the page.");
        setLoading(false);
        return;
      }

      console.log("✅ Cashfree SDK is available");
      console.log("Initializing Cashfree with mode:", mode);
      const cashfree = (window as any).Cashfree({ mode });
      console.log("✅ Cashfree initialized:", cashfree);

      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };
      console.log("🎯 Opening checkout with options:", checkoutOptions);

      const result = await cashfree.checkout(checkoutOptions);
      console.log("💳 Checkout result:", result);
    } catch (err: any) {
      console.error("❌ Payment popup error:", err);
      setError(err?.message || "Failed to open payment popup");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSession = async () => {
    setError(null);
    setCreatingSession(true);
    console.log("🔄 Creating test payment session...");
    console.log("Amount:", amount, "Mode:", mode);

    try {
      // Call a backend API to create a test order and get a session id
      const response = await fetch("/api/registration/test-cashfree-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, mode }),
      });

      console.log("📝 Response status:", response.status);
      const result = await response.json();
      console.log("📄 Response data:", result);

      if (response.ok && result.success && result.data?.paymentSessionId) {
        console.log("✅ Payment session created successfully");
        setSessionId(result.data.paymentSessionId);
      } else {
        console.error("❌ Failed to create session:", result.message);
        setError(result.message || "Failed to create payment session");
      }
    } catch (err: any) {
      console.error("❌ Session creation error:", err);
      setError(err?.message || "Failed to create payment session");
    } finally {
      setCreatingSession(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Cashfree Test Payment Popup</h2>

      {/* SDK Status Check */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">SDK Status:</h3>
        <div className="text-sm space-y-1">
          <div>
            SDK Loaded:{" "}
            {typeof window !== "undefined" && (window as any).Cashfree
              ? "✅ Yes"
              : "❌ No"}
          </div>
          <div>Environment: {process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT}</div>
          <div>
            Window Object:{" "}
            {typeof window !== "undefined"
              ? "✅ Available"
              : "❌ Not Available"}
          </div>
          <div>
            Cashfree Object:{" "}
            {typeof window !== "undefined" && (window as any).Cashfree
              ? "✅ Available"
              : "❌ Not Available"}
          </div>
        </div>
        <button
          onClick={() => {
            console.log("=== SDK DEBUG INFO ===");
            console.log("Window:", typeof window);
            console.log(
              "Cashfree:",
              typeof window !== "undefined" ? (window as any).Cashfree : "N/A"
            );
            console.log(
              "Environment:",
              process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT
            );
            if (typeof window !== "undefined" && (window as any).Cashfree) {
              try {
                const testCashfree = (window as any).Cashfree({
                  mode: "production",
                });
                console.log("Test initialization:", testCashfree);
              } catch (e) {
                console.error("Test initialization error:", e);
              }
            }
          }}
          className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded"
        >
          Debug SDK
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Payment Session ID
        </label>
        <input
          type="text"
          value={sessionId}
          onChange={(e) => setSessionId(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Enter paymentSessionId"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Mode</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="sandbox">Sandbox</option>
          <option value="production">Production</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Test Amount (INR)
        </label>
        <input
          type="number"
          value={amount}
          min={1}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleCreateSession}
          disabled={creatingSession}
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50"
        >
          {creatingSession ? "Creating Session..." : "Create Test Session"}
        </button>
        <button
          onClick={handleOpenPayment}
          disabled={loading || !sessionId}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Opening..." : "Open Payment Popup"}
        </button>
        <button
          onClick={() => {
            // Test with a dummy session ID to check popup functionality
            const testSessionId = "session_test_123_dummy";
            setSessionId(testSessionId);
            console.log("🧪 Set test session ID:", testSessionId);
          }}
          className="bg-orange-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-orange-700"
        >
          Test Popup
        </button>
      </div>
      {error && <div className="mb-2 text-red-600">{error}</div>}
      <p className="text-xs text-gray-500 mt-4">
        Use &quot;Create Test Session&quot; to generate a new paymentSessionId,
        or paste one manually. Then click &quot;Open Payment Popup&quot; to test
        the Cashfree payment popup.
      </p>
    </div>
  );
};

export default CashfreeTestPayment;
