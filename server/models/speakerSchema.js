import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const speakerPostSchema = new mongoose.Schema({
  organizer: {
    type: String,
  },
  venue: {
    type: String,
    required: true,
    unique: true,
  },
  time: {
    required: true,
    type: String,
  },
  links: { 
    type: String,
  },
  desc: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const SpeakerPost = mongoose.model("SpeakerPost", speakerPostSchema);