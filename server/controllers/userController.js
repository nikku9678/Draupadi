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
  console.log("hello2")
  res.status(200).json({
    success: true,
    user,
  });
});


// get All verified speaker speaker
export const getAllSpeaker = catchAsyncErrors(async (req, res, next) => {
  const user = await User.find({role:"Speaker",verified:true})
  console.log("hello2")
  res.status(200).json({
    success: true,
    user,
  });
});



export const getAdminProfile = catchAsyncErrors(async (req, res, next) => {
  console.log("admin")
  const user = await User.find({});

  if(user.isAdmin === true){
      return console.log("kk")
  }
  
  console.log("hello")
  res.status(200).json({
    success: false,
    length: user.length,
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
export const updateSpeakerInfo = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const { qualification,experties,bio ,country,city,address,verified ,experience} =
    req.body;
  const speaker = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!speaker) return next(new ErrorHandler("speaker not found", 404));
  await speaker.save();

  res.status(200).json({
    success: true,
    message: "speaker Updated!",
  });

  next(error);
});



export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const { productName, description, price, category, collegeName, image, location } =
    req.body;
  const product = await Product.findByIdAndUpdate(id, { ...req.body }, { new: true });
  if (!product) return next(new ErrorHandler("Product not found", 404));
  await product.save();

  res.status(200).json({
    success: true,
    message: "product Updated!",
  });

  next(error);
});
