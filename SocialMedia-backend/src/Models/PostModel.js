import mongoose from "mongoose";

export default mongoose.model(
  "Posts",
  mongoose.Schema(
    {
      userId: { type: String, required: true },
      desc: String,
      likes: [],
      image: String,
    },
    { timestamps: true }
  )
);
