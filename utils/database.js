const path = require("path");
const { Sequelize } = require("sequelize");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

console.log("📂 Project Root Directory:", path.dirname(__dirname));

// Debugging: Check if environment variables are loaded properly
console.log("⚙️ Database Config:", {
  name: process.env.DB_NAME?.trim(),
  user: process.env.DB_USER?.trim(),
  password: process.env.DB_PASSWORD?.trim(),
  host: process.env.DB_HOST?.trim(),
  dialect: process.env.DB_DIALECT?.trim() || "mysql", // Default to "mysql"
});

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME?.trim(),
  process.env.DB_USER?.trim(),
  process.env.DB_PASSWORD?.trim(),
  {
    host: process.env.DB_HOST?.trim(),
    dialect: process.env.DB_DIALECT?.trim() || "mysql", // Default to "mysql"
  }
);

module.exports = sequelize;
