
# OrryX -Chatbot Component (Open-source)

A lightweight React + Vite starter that demonstrates a configurable, embeddable chatbot component powered by Google's Gemini (via the `@google/genai` SDK). This project includes a minimal UI built with Tailwind CSS and sensible defaults for fast development and customization.

Table of contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Chatbot Props / Configuration](#chatbot-props--configuration)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This repository (`ncd`) showcases a floating chatbot component (`src/Chatbot.jsx`) you can drop into any React/Vite app. It connects to Google Gemini using the `@google/genai` package and includes UI configuration options such as position, theme color, and display variants.

## Features

- Embeddable floating chatbot component with open/close behavior
- Gemini (Google) generative AI integration via `@google/genai`
- Configurable props: logo, primary color, position, size, and more
- Tailwind CSS utility classes for styling
- Vite-powered dev server with fast HMR
- ESLint setup for consistent code quality

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- `@google/genai` (Gemini API client)
- ESLint

## Quick Start

Prerequisites
- Node.js 16+ (recommended)
- npm (or yarn/pnpm)

Install and run locally

```powershell
# from repository root
cd project
npm install
npm run dev
```

Open `http://localhost:5173` (or the URL Vite prints) to view the demo.

## Environment Variables

Create a `.env` or `.env.local` file in the `ncd` folder with the following keys (do not commit secrets):

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
VITE_GEMINI_MODEL=your_preferred_model_name
VITE_GEMINI_PROMPT=optional_system_prompt_or_instruction
```

The `Chatbot` component reads these environment variables via `import.meta.env` in `src/Chatbot.jsx`.

## Usage

The demo app mounts the `Chatbot` in `src/App.jsx`:

```jsx
import Chatbot from "./Chatbot";

function App() {
	return (
		<div>
			<h1>Welcome to My Website</h1>
			<Chatbot
				logo="/orryxlogo.png"
				primaryColor="#FF6A00"
				variant="shadow"
				position="top-right"
				titleText="Orry-X"
			/>
		</div>
	);
}

export default App;
```

### Programmatic details

`src/Chatbot.jsx` creates a `GoogleGenAI` client using `VITE_GEMINI_API_KEY`. When a user submits a message the component calls `ai.models.generateContent` and appends the response to the chat stream.

## Chatbot Props / Configuration

The component accepts the following props (defaults shown in code):

- `logo` (string | node): Image URL or element displayed on the floating button
- `primaryColor` (string): Main color used for header and buttons
- `variant` ("rounded" | "minimal" | "shadow"): UI style variant
- `position` ("top-left" | "top-right" | "middle" | "bottom-left" | "bottom-right"): Window position
- `titleText` (string): Title shown in header
- `userAvatar`, `botAvatar` (string | node): Avatars for messages

You can customize the component by passing different values from `App.jsx` or by editing `src/Chatbot.jsx` to change behavior (e.g., streaming responses or adding context history).

## Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production assets with Vite
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## Project Structure

Key files and folders:

```
project/
├─ package.json            # scripts & dependencies
├─ vite.config.js
├─ src/
│  ├─ main.jsx             # app entry
│  ├─ App.jsx              # demo app mounting Chatbot
│  ├─ Chatbot.jsx          # embeddable chatbot component (Gemini integration)
│  └─ index.css / App.css  # styles
├─ public/                 # static assets (e.g., logos)
└─ README.md
```

## Contributing

Contributions are welcome. Recommended workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make changes and run `npm run dev` to test locally
4. Open a pull request with a clear description

Please follow the existing code style and run `npm run lint` before submitting changes.

## License

This repository is provided under the MIT License — change this as appropriate for your project.

## Contact

If you have questions or want help integrating the chatbot into your app, open an issue or reach out via the project repository.

---

If you'd like, I can also:
- add a sample `.env.example` file,
- add a `LICENSE` file (MIT) and commit it,
- or create a brief demo GIF for the README.

Replace or edit any section to match the exact project branding and policies.
