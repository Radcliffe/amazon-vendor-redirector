import { db, collection, getDocs, setDoc, doc } from './firebase.js';
const collectionName = 'amazon-vendors';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getStoreDB") {
    getDocs(collection(db, collectionName)).then(snapshot => {
      const result = {};
      snapshot.forEach(docSnap => {
        result[docSnap.id] = docSnap.data().homepage;
      });
      sendResponse({ data: result });
    });
    return true;
  }

  if (request.action === "submitVendor") {
    const { storeName, homepage } = request.payload;
    setDoc(doc(db, collectionName, storeName), { homepage }).then(() => {
      sendResponse({ success: true });
    });
    return true;
  }

  if (request.action === "openPopup") {
    const {storeName} = request.payload;
    chrome.windows.create({
      url: `popup.html?store=${encodeURIComponent(storeName)}`,
      type: "popup",
      width: 400,
      height: 400
    });
    sendResponse({success: true});
  }

  if (request.action === "closePopup") {
      chrome.windows.getAll({ windowTypes: ["popup"] }, (windows) => {
        windows.forEach(window => {
            chrome.windows.remove(window.id);
        });
      });
      sendResponse({success: true});
  }

});

