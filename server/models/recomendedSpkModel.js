import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const recomendedSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  speaker_name: {
    type: String,
  },
  speaker_id: {
    type: String,
  },
  speaker_email: {
    type: String,
  },
  speaker_phone: { 
    type: String,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const RecomendedSpk = mongoose.model("RecomendedSpk", recomendedSchema);