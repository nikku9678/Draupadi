import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";

export const login = catchAsyncErrors(async (req, res, next) => {
  console.log("login")
  const { email, password} = req.body;
  if (!email || !password ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }

  generateToken(user, "Login Successfully!", 201, res);
});

export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password,phone ,role} =
    req.body;
  if (
    !name ||
    !email ||
    !role ||
    !phone ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(new ErrorHandler("User Already Exist", 400));
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
    role,
  });
  res.status(200).json({
    success: true,
    message: "New User Registered",
    user,
  });
});



// get user profile
export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  console.log(user)
  res.status(200).json({
    success: true,
    user,
  });
});

export const getVerifiedSpeaker = catchAsyncErrors(async (req, res, next) => {
  const user = await User.find({role:"Speaker",verified:true})
  console.log("verified speaker")
  res.status(200).json({
    success: true,
    user,
  });
});



// Logout function for frontend patient
export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User Logged Out Successfully.",
    });
});




