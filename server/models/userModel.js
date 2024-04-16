import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  role: {
    type: String,
    required: [true, "Please select a role"],
    enum: ["Organization", "user","Speaker"],
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  phone: {
    type: Number,
    // select: false,
  },
  experties: { // field
    type: String,
    // required: true,
    // select: false,
  },
  bio: {
    // required: true,
    type: String,
    // select: false,
  },
  qualification: {
    // required: true,
    type: String,
    // select: false,
  },
  phone: {
    type: Number,
    // select: false,
  },
  country: {
    type: String,
    // required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    // required: [true, "Please provide a city name."],
  },
  industry: {
    type: String,
    // required: [true, "Please provide a city name."],
  },
  address: {
    type: String,
    // required: [true, "Please provide location."],
    // minLength: [20, "Location must contian at least 20 characters!"],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  experience: {
    // required:true,
    type: Number,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  };

export const User = mongoose.model("User", userSchema);