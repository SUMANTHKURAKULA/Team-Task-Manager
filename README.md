# Team-Task-Manager
Website About Task Manager
# 🗂️ TaskFlow – Project Management App

## 👋 About the Project

TaskFlow is a simple and practical project management web application built to help users organize their tasks and workflows efficiently. The idea behind this project is to provide a clean and easy-to-use platform where users can create, manage, and track tasks without unnecessary complexity.

Whether you're working individually or just exploring full-stack development, this project demonstrates how frontend, backend, and database systems work together.

---

## ✨ What You Can Do

With TaskFlow, you can:

* Create an account and log in securely 🔐
* Manage tasks easily (create, update, delete) ✅
* Assign roles like Admin or User 👤
* Track progress of tasks 📊

---

## 🛠️ Technologies Used

### Frontend

* React.js (with Vite for fast development)
* Tailwind CSS for styling

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Local or Atlas)

---

## 📁 Project Structure

```
Project Management Website/
│
├── backend/        → Server-side logic
├── frontend/       → User interface
```

---

## ⚙️ How to Run the Project

### Step 1: Clone the Repository

```
git clone <your-repo-url>
cd Project Management Website
```

---

### Step 2: Start Backend

```
cd backend
npm install
npm start
```

Create a `.env` file inside backend:

```
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

### Step 3: Start Frontend

```
cd frontend
npm install
npm run dev
```

---

### Step 4: Open in Browser

```
http://localhost:5173
```

---

## ⚠️ Common Issues (and Quick Fixes)

### 1. Registration not working

* Make sure backend is running
* Check API URL in frontend

### 2. Database connection error

* Start MongoDB locally OR
* Use MongoDB Atlas connection string

### 3. CORS error

Add this in backend:

```js
const cors = require("cors");
app.use(cors());
```

---

## 🚀 Future Improvements

This project can be extended with:

* Deadlines and reminders ⏰
* Team collaboration 👥
* Notifications 🔔
* Dashboard and analytics 📈

---

## 👨‍💻 Author

Sumanth K
B.Tech CSE Student
Full Stack Developer (Learning & Building)

---

## 📌 Final Note

This project is built as a learning experience to understand how full-stack applications work in real-world scenarios. Feel free to explore, modify, and improve it further 🚀
