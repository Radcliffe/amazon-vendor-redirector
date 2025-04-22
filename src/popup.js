// Pre-fill if store is in the URL
const params = new URLSearchParams(window.location.search);
const store = params.get("store");
if (store) {
  document.getElementById("storeName").value = store;
}

document.getElementById("submitBtn").addEventListener("click", () => {
  const storeName = document.getElementById("storeName").value.trim();
  const homepage = document.getElementById("homepage").value.trim();
  const status = document.getElementById("status");

  if (!storeName || !homepage) {
    status.textContent = "Both fields are required.";
    return;
  }

  chrome.runtime.sendMessage(
    {
      action: "submitVendor",
      payload: { storeName, homepage }
    },
    (response) => {
      if (response.success) {
        status.textContent = "Vendor submitted!";
      } else {
        status.textContent = "Error submitting vendor.";
      }
    }
  );
});
