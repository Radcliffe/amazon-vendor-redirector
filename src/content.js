chrome.runtime.sendMessage({ action: "getStoreDB" }, (response) => {
  const db = response.data;
  if (!db) return;

  const storeLink = [...document.querySelectorAll("a")]
    .find(a => a.textContent.trim().startsWith("Visit the") && a.href.includes("/stores/"));
  if (!storeLink) return;

  const match = storeLink.href.match(/\/stores\/([^\/]+)\/page\//);
  if (!match) return;

  const storeName = match[1];

  if (!(storeName in db)) {
    // Optional: Add an indicator that it's missing, or send to popup for submission
    console.log(`Vendor "${storeName}" not found in DB`);
    chrome.runtime.sendMessage({ action: "openPopup", payload: { storeName } });
    return;
  }

  const homepageUrl = db[storeName];
  const button = document.createElement("a");
  button.href = homepageUrl;
  button.textContent = "Visit Vendor Website";
  button.target = "_blank";
  button.style.marginLeft = "10px";
  button.style.padding = "6px 12px";
  button.style.backgroundColor = "#ff9900";
  button.style.color = "white";
  button.style.borderRadius = "4px";
  button.style.textDecoration = "none";
  button.style.fontWeight = "bold";
  button.style.fontSize = "14px";

  storeLink.parentNode.insertBefore(button, storeLink.nextSibling);
});
