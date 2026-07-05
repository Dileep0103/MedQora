const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/connectToDB");

const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

connectToDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MedQora Backend Running");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
