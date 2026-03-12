# AI Email Draft Assistant

The AI Email Draft Assistant helps users generate professional email drafts for various scenarios using AI.

## Tech Stack
- **Frontend**: React (Vite) with Axios setup, custom hooks, and standard CSS.
- **Backend**: Node.js with Express, integrated natively using the Groq SDK.
- **AI Model**: Groq API (llama-3.1-8b-instant)

## Features
- Selecting Email Types (Leave Request, Internship Reply, etc.)
- Selecting Email Tone (Formal, Friendly, Professional, etc.)
- Chat UI mimicking modern experiences.
- Loading indicators while generating output.
- 1-Click Copy and Download as `.txt`.

## Getting Started

### Installation

1. **Clone the repository or navigate to the project directory**
2. **Setup Environment Variables**
   Create a `.env` file within the `backend/` directory and configure the Groq API key:
   ```env
   GROQ_API_KEY=YOUR_GROQ_API_KEY_HERE
   PORT=5000
   ```

3. **Install Dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

### Running the Project

**1. Run Backend**
```bash
cd backend
node server.js
```

**2. Run Frontend**
In a new terminal:
```bash
cd frontend
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173) to view the application in your browser.
