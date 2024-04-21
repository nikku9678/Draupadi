import mongoose from "mongoose";

const infoModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  
  phone: {
    type: Number,
  },
  experties: { 
    type: String,
  },
  company: { 
    type: String,
  },
  bio: {
    type: String,
  },
  qualification: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },

  city: {
    type: String,
  },
  industry: {
    type: String,
  },
  address: {
    type: String, 
  },
  experience: {
    type: Number,
  },
  postalCode: {
    type: Number,
  },
  dob: {
    type: String,
  },
  image: {
    public_id: {
      type: String, 
    },
    url: {
      type: String, 
    },
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



export const Info = mongoose.model("Info", infoModel);