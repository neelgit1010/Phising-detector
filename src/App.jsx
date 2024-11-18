import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Fetch current tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      setUrl(activeTab.url);
    });
  }, []);

  const analyzeUrl = async () => {
    // Example: Check for "http" usage as a basic phishing check
    if (!url.startsWith("https")) {
      setStatus("⚠️ This site may not be secure.");
    } else {
      setStatus("✅ This site looks secure.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Phishing Detector</h1>
      <p className="mt-2 text-center">Analyzing... </p>
      <p className="mt-4 text-center text-green-500 font-bold">{url}</p>
      <button
        className="btn btn-primary mt-8"
        onClick={analyzeUrl}
      >
        Check Security
      </button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}

export default App;
