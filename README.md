# 🌱 KrishiMitra AI

An AI-powered smart farming platform that helps farmers detect crop diseases, monitor weather conditions, and receive intelligent farming recommendations.

---

## 🚀 Features

- 🌾 Crop Disease Detection
- 🤖 AI Farming Assistant
- 🌦️ Live Weather Monitoring
- 📊 Smart Dashboard
- 📈 Market Insights (UI)
- 🔐 Modern Login Page
- 📱 Responsive Design

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS
- Lucide React Icons

### Backend
- Node.js
- Express.js

### Tools
- Postman
- Git & GitHub
- VS Code

---

## 📂 Project Structure

```
KrishiMitra-AI
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── public
│   ├── login
│   └── weather
│
├── src
│   ├── app
│   ├── components
│   └── styles
│
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Luckymishra00/KrishiMitra-AI.git
```

Move into the project

```bash
cd KrishiMitra-AI
```

### Install Frontend

```bash
npm install
```

### Start Frontend

```bash
npm run dev
```

Runs at

```
http://localhost:3000
```

---

## Backend Setup

Go to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Run backend

```bash
node server.js
```

Runs at

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Home API

```
GET /
```

Response

```json
{
  "message": "Welcome to KrishiMitra AI Backend 🌱",
  "status": "Server Running Successfully"
}
```

---

## Weather API

```
GET /api/weather
```

---

## Disease APIs

### Get All Diseases

```
GET /api/diseases
```

### Add Disease

```
POST /api/disease
```

### Update Disease

```
PUT /api/disease/:id
```

### Delete Disease

```
DELETE /api/disease/:id
```

---

## 📷 Project Screenshots

- Home Page
- Login Page
- Dashboard
- Disease Detection
- Weather Monitoring

---

## 👨‍💻 Developed By

**Lucky Mishra**

MCA Student

Chandigarh University

---

## ⭐ Future Enhancements

- User Authentication
- AI Chatbot Integration
- Disease Prediction using Deep Learning
- Real-Time Weather API
- Market Price Prediction
- Farmer Community Forum

---

## 📄 License

This project is developed for learning and internship purposes.

# Week 5 - Backend Development with MongoDB

## Objectives
- Connect the backend with MongoDB Atlas.
- Implement CRUD operations using Express.js and Mongoose.
- Test all APIs using Postman.

## Work Completed
- Connected MongoDB Atlas using Mongoose.
- Created MVC folder structure.
- Created Disease Model.
- Implemented Controllers.
- Implemented Routes.
- Developed REST APIs:
  - GET /api/diseases
  - GET /api/diseases/:id
  - POST /api/diseases
  - PUT /api/diseases/:id
  - DELETE /api/diseases/:id
- Successfully tested all APIs using Postman.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

## Status
✅ Week 5 Completed Successfully