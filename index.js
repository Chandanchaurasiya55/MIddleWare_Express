const express = require("express");
const app = express();

const port = 3000;


const loginMiddleware = (req, res, next) => {
  console.log("Login Middleware executed");
  next();
}
app.use(loginMiddleware);

const authMiddleware = (req, res, next) => {
  console.log("Auth Middleware executed");
  next();
}   
app.use(authMiddleware);

const validationMiddleware = (req, res, next) => {
  console.log("Validation Middleware executed");
  next();
}   
app.use(validationMiddleware);


app.get("/", (req, res) => {
  res.send("Hello, chandan!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});