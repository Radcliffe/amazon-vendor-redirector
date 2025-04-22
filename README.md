
# 🛍️ Amazon Vendor Redirector

A Chrome extension that helps conscious shoppers avoid buying directly from Amazon by providing a direct link to the vendor's homepage when viewing a product. It detects the Amazon storefront and, if known, adds a "Visit Vendor Website" button. If the store is missing, users can submit it for review.

---

## ✨ Features

- 🛒 Automatically detects Amazon product pages
- 🔗 Adds a button linking to the vendor’s official homepage
- 📬 Users can submit missing vendors through a popup form
- ☁️ Vendor data is synced from a Firebase Firestore database

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Radcliffe/amazon-vendor-redirector.git
cd amazon-vendor-redirector
```

### 2. Set Up Firebase

Create a Firebase project and Firestore database if you haven't already. Add a collection named `amazon-vendors`, where each document ID is a store name, and each document contains:

```json
{
  "homepage": "https://www.examplevendor.com"
}
```

### 3. Create a `.env` File

Copy `.env.example` to `.env` and fill in your Firebase credentials:

```bash
cp .env.example .env
```

Update `.env`:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Build the Extension

```bash
npm run build
```

This will output a `dist/` folder with everything you need.

---

## 🧪 Load the Extension in Chrome

1. Go to `chrome://extensions`
2. Enable **Developer Mode** (top right)
3. Click **Load unpacked**
4. Select the `dist/` folder

---

## 📁 Project Structure

```
amazon-vendor-redirector/
├── public/              # Static assets & manifest.json
│   ├── popup.html
│   ├── icon-*.png
│   └── manifest.json
├── src/                 # Core extension code
│   ├── background.js
│   ├── content.js
│   ├── popup.js
│   └── firebase.js
├── .env.example
├── vite.config.js
└── package.json
```

---

## 🤝 Contributing

We welcome contributions! Feel free to:

- Add features (e.g., inline form instead of popup)
- Improve styling or UI
- Expand vendor data import options

---

## 🔒 Security Notice

No API keys or sensitive data are included in this repo. Make sure to keep your `.env` file private and **never commit secrets**.

---

## 📃 License

MIT License — feel free to use and modify this project.

---

## Acknowledgments

<a href="https://www.flaticon.com/free-icons/shop" title="shop icons">Shop icons created by Freepik - Flaticon</a>
