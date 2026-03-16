const express = require("express");
const booksRoutes = require("./routes/bookRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(logger);

// routes here
app.use("/books", booksRoutes);

// eroor handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running.");
});
