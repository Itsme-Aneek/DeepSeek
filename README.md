<div align="center">
  <h1>🧠 NeuroSeek</h1>
  <p><strong>AI-Powered Conversational Intelligence — Built with Next.js & OpenAI</strong></p>

  <img src="https://github.com/Itsme-Aneek/NeuroSeek/logo_icon.svg" alt="NeuroSeek Logo" width="280"/>

  <br/>
  <p>
    <b>NeuroSeek</b> is a DeepSeek-inspired AI chat platform that merges reasoning, creativity, and elegant design — all powered by OpenAI API and Next.js 15.
  </p>
  <br/>

  <a href="#🚀-features">Features</a> •
  <a href="#🧩-tech-stack">Tech Stack</a> •
  <a href="#⚙️-installation">Installation</a> •
  <a href="#💡-usage">Usage</a> •
  <a href="#🧭-project-structure">Project Structure</a> •
  <a href="#📜-license">License</a>
</div>

---

## 🚀 Features

- ⚡ **AI Chat System** — Real-time intelligent replies using the OpenAI API  
- 🔐 **Auth Integration** — Secure user authentication via Clerk  
- 💾 **MongoDB Support** — Data stored and managed with Mongoose  
- 🧠 **Contextual Prompts** — Keeps conversational memory and context  
- 🌈 **Modern UI** — Minimal, futuristic UI with TailwindCSS 4  
- 🔥 **Fast Performance** — Powered by Next.js 15 + Turbopack  
- 💬 **Code Highlighting** — Markdown and PrismJS support for code blocks  
- ☁️ **Ready for Deployment** — Easily deploy on Vercel or Railway  

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | Next.js 15, React 19, TailwindCSS 4 |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | MongoDB (via Mongoose) |
| **AI Engine** | OpenAI API |
| **Authentication** | Clerk |
| **Styling & Utilities** | TailwindCSS, PrismJS, React Markdown, React Hot Toast |
| **HTTP Client** | Axios |
| **Deployment** | Vercel |
| **Notification & Webhooks** | Svix |

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Itsme-Aneek/NeuroSeek.git

# Navigate into the folder
cd NeuroSeek

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start the development server
npm run dev

```

Then open 👉 http://localhost:3000 to explore NeuroSeek.


## 💡 Usage

<ol type="1">
      <li><b>Sign</b> in securely using Clerk authentication.</li>
      <li>Start chatting — NeuroSeek generates context-aware, intelligent responses.</li>
      <li>View <b>syntax-highlighted code</b> outputs and markdown-rendered text.</li>
      <li>Enjoy smooth UX with real-time responses powered by OpenAI.</li>
</ol>

## 🧭 Project Structure

```bash
NeuroSeek/
├── app/                          # Next.js App Router
├── assets/                       # Static assets (images, logos)
├── components/
│   ├── ChatLabel.jsx
│   ├── Message.jsx
│   ├── PrismHighlighter.jsx
│   ├── PromptBox.jsx
│   └── Sidebar.jsx
├── config/
│   └── db.js                     # MongoDB connection setup
├── context/
│   └── AppContext.jsx            # Global app context provider
├── models/                       # Database models
│   ├── Chat.js
│   └── User.js
├── public/                       # Public static files
├── .env                          # Environment variables
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── middleware.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```
## 🧠 Environment Variables
Create a **.env** file and include:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
MONGODB_URI=
SIGNIN_SECRET=
NEUROSEEK_API_KEY=
```

## 📜 License
Licensed under the MIT License.
Feel free to use, modify, and share.

<div align="center"> 
  <sub>Built with 💙 by <a href="https://github.com/Itsme-Aneek">Aneek Hazra</a></sub>
  <br/> 
  <small>© 2025 NeuroSeek — All Rights Reserved</small> 
</div>



