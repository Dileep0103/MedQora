import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/common/PrivateRoute";

// Lazy-loaded components
const Home = lazy(() => import("./components/common/Home"));
const Login = lazy(() => import("./components/common/Login"));
const Register = lazy(() => import("./components/common/Register"));
const UserHome = lazy(() => import("./components/user/UserHome"));
const AdminHome = lazy(() => import("./components/admin/AdminHome"));
const UserAppointments = lazy(() =>
  import("./components/user/UserAppointments")
);
const ApplyDoctor = lazy(() =>
  import("./components/user/ApplyDoctor")
);

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              Loading...
            </div>
          }
        >
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/adminhome"
                element={
                  <PrivateRoute>
                    <AdminHome />
                  </PrivateRoute>
                }
              />

              <Route
                path="/userhome/*"
                element={
                  <PrivateRoute>
                    <UserHome />
                  </PrivateRoute>
                }
              >
                <Route
                  path="userappointments/:doctorId"
                  element={<UserAppointments />}
                />
                <Route
                  path="applydoctor"
                  element={<ApplyDoctor />}
                />
              </Route>
            </Routes>
          </div>
        </Suspense>

        <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3">
            © 2026 MedQora
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App; 