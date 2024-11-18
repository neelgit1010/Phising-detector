chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      console.log("URL updated: ", changeInfo.url);
      // Add further analysis logic here (e.g., API checks)
    }
  });
  