# 🩺 Medqora — Healthcare Appointment Booking System
> *Care, Scheduled Simply*

🩺 MedQora is a full-stack healthcare appointment booking platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It lets patients book appointments with doctors, doctors manage their schedules and requests, and admins oversee the whole platform.

---

## 🚀 Features

### 👤 Patient
- Secure registration and login (JWT-based auth)
- Browse all approved doctors
- Book appointments and upload medical documents
- View appointment status and history

### 🩺 Doctor
- Apply to become a doctor on the platform (pending admin approval)
- Update profile details
- View and manage incoming appointment requests
- Accept or reject appointments

### 🛡️ Admin
- View and manage all users and doctors
- Approve or reject doctor applications
- View all appointments across the platform

---

## 🛠️ Tech Stack

| Category        | Technologies |
|------------------|--------------|
| Frontend         | React.js, Vite, Material UI, Ant Design, React Bootstrap |
| Backend          | Node.js, Express.js |
| Database         | MongoDB, Mongoose |
| Authentication   | JWT, bcryptjs |
| File Uploads     | Multer |
| Tools            | Git, GitHub, Postman |

---

## 📂 Project Structure

```bash
Medqora/
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/            # Axios config
│       ├── components/
│       │   ├── admin/      # Admin dashboard views
│       │   ├── common/     # Login, Register, Home, Notifications
│       │   └── user/       # Patient/doctor views
│       └── App.jsx
│
├── backend/
│   ├── config/             # DB connection
│   ├── controllers/        # admin, doctor, user controllers
│   ├── middlewares/        # JWT auth middleware
│   ├── routes/             # admin, doctor, user routes
│   ├── schemas/            # Mongoose models
│   ├── uploads/            # Uploaded medical documents
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- npm
- MongoDB (Atlas or local)
- Git

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:

```env
MONGO_URI=your_mongodb_connection_string
JWT_KEY=your_secret_key
PORT=8001
```

Run the backend:

```bash
npm run dev
```

> Alternatively, `npm start` also works (runs `node index.js` without auto-reload).

Server runs at `http://localhost:8001`.

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 🔌 API Overview

**User** (`/api/v1/user`)
- `POST /register` – Register a new user
- `POST /login` – User login
- `POST /getuserdata` – Get logged-in user's data
- `POST /registerdoc` – Apply to become a doctor
- `GET /getalldoctorsu` – List all approved doctors
- `POST /getappointment` – Book an appointment (with document upload)
- `GET /getuserappointments` – Get user's appointments

**Doctor** (`/api/v1/doctor`)
- `POST /updateprofile` – Update doctor profile
- `POST /handlestatus` – Accept/reject an appointment

**Admin** (`/api/v1/admin`)
- `GET /getallusers` – List all users
- `GET /getalldoctors` – List all doctors
- `POST /getapprove` / `POST /getreject` – Approve/reject doctor applications
- `GET /getallAppointmentsAdmin` – List all appointments

All routes except register/login are protected by JWT auth middleware.

---

## 🔮 Future Enhancements

- Video consultation support
- Online payment integration
- Mobile app version
- Advanced health analytics dashboard

---

## 👨‍💻 Author

**Dileep Kumar**
GitHub: [https://github.com/Dileep0103/MedQora](https://github.com/Dileep0103/MedQora)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

