import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const helpSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  message: { 
    type: String,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const Help = mongoose.model("Help", helpSchema);