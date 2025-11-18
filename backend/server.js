require("dotenv").config();
const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const include = require('express-auto-frontend');
const connectDB = require("./config/dbconfig");
const user = require("./models/users");
const contact = require("./models/contacts");
const contactRouter = require("./routes/contacts.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
//app.use(helmet());
app.use(express.json());
app.use(cors()); // Enable CORS for development

// Database connection
const startServer = async () => {
  try {
    await connectDB();
    console.log("Database connected successfully!");

    // Create initial user if needed
    await createUser();

    // API routes
    app.use("/contactUs", contactRouter);

    // Automatically include frontend
    include(app, './../tce_frontend');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the application:", error);
    process.exit(1);
  }
};

// User creation function
const createUser = async () => {
  try {
    // Check if admin user already exists
    const existingUser = await user.findOne({ username: "minjazekiel" });
    if (!existingUser) {
      const newUser = new user({
        first_name: "Zekiel",
        last_name: "Minja",
        username: "minjazekiel",
        email: "ezekielminja@gmail.com",
        password: "123456789", // Consider hashing this password
        isAdmin: true
      });
      await newUser.save();
      console.log(`New user created: \n ${newUser}`);
    }
  } catch(err) {
    console.error(`Error creating user: \n ${err.message}`);
  }
};

startServer();
