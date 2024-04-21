import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const requestEvent = new mongoose.Schema({

  name: {
    type: String,
  },
  message: { 
    type: String,
  },
  spkId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "spk Id Is Invalid!"],
  },
  orgId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "org Id Is Required!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const RequestEvent = mongoose.model("RequestEvent", requestEvent);