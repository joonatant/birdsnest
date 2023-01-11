const express = require("express");
const cors = require("cors");
const violations = require("./components/violations")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.static('build')) 

app.use("/violations", violations)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});