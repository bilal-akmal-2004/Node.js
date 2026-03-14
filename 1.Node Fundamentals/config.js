require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  secret: process.env.secret,
};

module.exports = config;
