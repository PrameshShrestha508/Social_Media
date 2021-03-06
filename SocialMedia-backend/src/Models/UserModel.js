import mongoose from "mongoose";

export default mongoose.model(
  "Users",
  mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      profilePicture: String,
      coverPicture: String,
      about: String,
      livesin: String,
      worksAt: String,
      relationship: String,
      followers: [],
      following: [],
    },
    { timestamps: true }
  )
);
