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
  },
  experties: { 
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
  city: {
    type: String,
  },
  industry: {
    type: String,
  },
  address: {
    type: String, 
  },
  verified: {
    type: Boolean,
    default: false,
  },
  experience: {
    type: Number,
  },
  postalCode: {
    type: Number,
  },
  review: {
    type: String,
  },
  rating: {
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
  notification: {
    type: Array,
    default: [],
  },
  seennotification: {
    type: Array,
    default: [],
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