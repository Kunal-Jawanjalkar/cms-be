import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 5000;

// * EXPRESS MIDDLEWARES * //
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(helmet());

app.get("/test", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
