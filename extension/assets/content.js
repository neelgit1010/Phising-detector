console.log("Phishing Detector Content Script Loaded");

// Example: Check if a page contains suspicious login forms
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  if (!form.action.startsWith("https")) {
    console.warn("Suspicious form detected:", form);
  }
});
