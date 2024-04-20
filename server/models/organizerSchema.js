import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const organizerShema = new mongoose.Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
      },
      desc: {
        type: String,
      },
      phone: {
        type: Number,
      },
      address: {
        type: String,
      },
      time: {
        type: String,
      },
      organizerID: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["Organization"],
          required: true,
        },
      },
      speakerID: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["Speaker"],
          required: true,
        },
      },
});


export const Organizer = mongoose.model("Organizer", organizerShema);