import express from "express";
import userRouter from "./routes/user.route.js";
import pinRouter from "./routes/pin.route.js";
import commentRouter from "./routes/comment.route.js";
import boardRouter from "./routes/board.route.js";
import connectDB from "./utils/connectDB.js";

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/pins", pinRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at port ", PORT);
});
