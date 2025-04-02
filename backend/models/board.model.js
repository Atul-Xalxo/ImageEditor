import { Schema } from "mongoose";
import mongoose from "mongoose";

const boardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("board", boardSchema);
