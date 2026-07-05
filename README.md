# 🏥 Medqora — Healthcare Appointment Booking System
> *Care, Scheduled Simply*

Medqora is a full-stack MERN healthcare appointment booking platform that connects patients and doctors through a secure, role-based web application. It streamlines the process of scheduling medical appointments — making healthcare access simple, fast, and reliable.

---

## 🚀 Features

### 👤 Patient Features
- User Registration & Login
- JWT-based Secure Authentication
- Browse & Search Available Doctors
- Book / Reschedule Appointments
- View Appointment History
- Apply for Doctor Verification
- Real-Time Notifications

### 🩺 Doctor Features
- Doctor Application & Approval Workflow
- Manage Incoming Appointments
- Update Appointment Status
- Profile Management

### 👨‍💼 Admin Features
- Admin Dashboard with Platform Statistics
- Manage Users & Doctors
- Approve / Reject Doctor Applications
- Monitor All Appointments

---

## 🛠️ Tech Stack

### Frontend
- React.js + Vite
- Axios
- React Router DOM
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer (File Uploads)

### Tools & Services
- Git & GitHub
- MongoDB Atlas
- Postman

---

## 📂 Project Structure

```
Medqora/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/       # Home, Login, Register, Notification
│   │   │   ├── user/         # DoctorList, Appointments, ApplyDoctor
│   │   │   └── admin/        # AdminDashboard, Users, Doctors
│   │   ├── api/
│   │   │   └── axiosConfig.js
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/          # userC.js, doctorC.js, adminC.js
│   ├── routes/               # userRoutes, doctorRoutes, adminRoutes
│   ├── schemas/              # userModel, docModel, appointmentModel
│   ├── middlewares/          # authMiddleware.js
│   ├── config/               # connectToDB.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Dileep0103/MedQora.git
cd MedQora
```

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

### 3. Frontend Setup (new terminal)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`  
Backend runs at: `http://localhost:8001`

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key
PORT=8001
```

> ⚠️ Never commit your `.env` file to GitHub. Add it to `.gitignore`.

---

## 🎯 Future Enhancements

- 💳 Online Payment Integration
- 📹 Video Consultation
- 📧 Email Notifications
- 📋 Prescription Management
- 🤖 AI-based Doctor Recommendations

---

## 👨‍💻 Author

**Valluri Dileep Kumar**

- 🔗 GitHub: [Dileep0103](https://github.com/Dileep0103)
- 💼 LinkedIn: [Valluri Dileep Kumar](https://www.linkedin.com/in/valluri-dileep-kumar/)

---

## ⭐ Support

If you found this project useful, consider giving it a star ⭐ on GitHub!