const express = require("express");
const app = express();
const path = require("path");

const apiRouter = require("./routes/api");

app.use("/build", express.static(path.join(__dirname, "../build")));

app.use("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);
