# 🏆 Leaderboard App

A full-stack web application built with **ReactJS**, **NodeJS**, and **MongoDB Atlas** that allows users to:
- Claim random points
- Track real-time leaderboard rankings
- View claim history with pagination
- Add new users dynamically
- Toggle between light and dark mode

---

## 🚀 Features

### 🧑‍💼 User Management
- Select from a list of users (initial 10 users seeded)
- Add new users directly from the frontend

### 🎯 Claim Random Points
- Click "Claim" to randomly award 1–10 points to the selected user
- Updates leaderboard and stores claim history in real-time

### 📊 Leaderboard
- Displays users ranked by their total points
- Updates instantly after every claim

### 🕓 Claim History
- View a list of all claim events with:
  - User name
  - Points claimed
  - Timestamp
- Paginated (5 entries per page) with Prev/Next controls

### 🌗 Dark Mode
- Toggle between light and dark themes

---

## 🛠️ Tech Stack

### Frontend
- **ReactJS**
- Axios
- Vanilla CSS (Dark Mode, responsive layout)

### Backend
- **NodeJS** + **Express**
- **MongoDB Atlas** (cloud database)
- **Mongoose** ODM

---

## 📁 Folder Structure

```

leaderboard-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── public/
│
└── .gitignore
└── README.md

````

---

## 📦 Installation

### Prerequisites
- Node.js & npm installed
- MongoDB Atlas cluster set up

### Clone & Install
```bash
git clone https://github.com/yourusername/leaderboard-app.git
cd leaderboard-app
````

### Backend Setup

```bash
cd backend
npm install
# Add your MongoDB URI to a `.env` file
echo "MONGO_URI=your-mongo-uri-here" > .env
npm run dev
```

### Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🌐 Deployment (Suggested)

* **Frontend:** Deploy to Vercel or Netlify
* **Backend:** Deploy to Render or Railway
* **Database:** MongoDB Atlas

---

## 📚 Learnings

* Component-based React architecture
* Real-time UI updates with API interactions
* Backend routing & MongoDB schema design
* Pagination, state management, and UI polishing

---

## 🙋‍♀️ Author

**Shreya Srivastava**
[GitHub](https://github.com/Shreya904) | [LinkedIn](https://www.linkedin.com/in/shreya-srivastava-2b11b225b/)

---

