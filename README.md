✈️ AI Travel Agent

AI Travel Agent is a full-stack AI-powered travel planning application that helps users plan trips intelligently.
It uses AI (OpenAI API) to provide smart travel recommendations, itineraries, and destination insights.

🚀 Features

🤖 AI-powered travel recommendations (OpenAI)

🗺️ Personalized destination suggestions

📅 Smart itinerary planning

💬 AI-based travel assistant

🖥️ Modern frontend with Next.js

🔐 Secure backend services

🗄️ Persistent data storage with MySQL

🛠️ Tech Stack
🌐 Frontend

Next.js

React

Tailwind CSS

TypeScript / JavaScript

⚙️ Backend

Spring Boot (Java) – Core backend services & APIs

Python – AI processing & helper services

OpenAI API – AI-based travel suggestions & responses

MySQL – Database for users, trips, itineraries, and history

🔧 Other Tools

REST APIs

JWT / Session-based Authentication

Git & GitHub

Vercel (Frontend Deployment)

⚙️ Getting Started
1️⃣ Install frontend dependencies
npm install
# or
yarn install
# or
pnpm install

2️⃣ Run frontend (Next.js)
npm run dev


Visit:
👉 http://localhost:3000

🔧 Backend Setup (Overview)
Spring Boot

Handles user management, trip data, and API orchestration

Connects to MySQL database

Communicates with Python AI services

Python AI Service

Integrates with OpenAI API

Processes AI prompts and responses

Sends results back to Spring Boot APIs

🗄️ Database (MySQL)

Used to store:

User profiles

Travel preferences

Generated itineraries

Travel history

AI interaction logs

🔐 Environment Variables

Create a .env.local (frontend) and application config (backend):

OPENAI_API_KEY=your_openai_api_key
DB_HOST=localhost
DB_NAME=ai_travel_agent
DB_USER=root
DB_PASSWORD=your_password


⚠️ Never push environment files to GitHub.

📂 Project Structure (High Level)
frontend/        → Next.js frontend
backend/         → Spring Boot backend
ai-service/      → Python AI service
database/        → MySQL schemas

🚀 Deployment

Frontend: Vercel

Backend: AWS / VPS / Docker

Database: MySQL Server

📌 Future Enhancements

✈️ Real-time flight & hotel price integration

🧾 Budget & expense planning

🌍 Multi-language AI support

📱 Mobile app integration

🧠 Smarter AI personalization
