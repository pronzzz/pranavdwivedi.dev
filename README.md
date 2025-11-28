# Pranav Dwivedi - Portfolio

Personal portfolio website built with React, Tailwind CSS, and Google Gemini API.

## 🚀 Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run locally**:
    ```bash
    npm start
    ```
    The app will open at [http://localhost:3000](http://localhost:3000).

## 🤖 AI Configuration

To enable the Chatbot:
1.  Create a `.env` file in the root directory.
2.  Add your API key:
    ```
    REACT_APP_API_KEY=your_google_gemini_api_key
    ```

## 🌍 Deployment (GitHub Pages)

1.  **Update homepage**:
    In `package.json`, change the `"homepage"` field to your URL:
    ```json
    "homepage": "https://pronzzz.github.io/your-repo-name"
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```
    This script builds the app and pushes it to the `gh-pages` branch.
