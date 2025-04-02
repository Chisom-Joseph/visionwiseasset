require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 2348;

const app = express();

app.use(express.static("public"));
app.use(require("./routes"));

app.listen(PORT, () =>
  console.log(`Server Up and running on: http://localhost:${PORT}`)
);
