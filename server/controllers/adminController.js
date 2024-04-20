import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";
import { Help } from "../models/messageModel.js";

// get All verified speaker speaker
export const getAllSpeaker = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({role:"Speaker"})
    
    res.status(200).json({
      success: true,
      user,
    });
  });
export const getAllHelpMessage = catchAsyncErrors(async (req, res, next) => {
    const msg = await Help.find({})
    
    res.status(200).json({
      success: true,
      msg,
    });
  });

export const getAllOrganization = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({role:"Organization"})
    
    res.status(200).json({
      success: true,
      user,
    });
  });



  
export const getAllUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({role:"user"})
    console.log("hello2")
    res.status(200).json({
      success: true,
      user,
    });
  });
  
export const getVerifiedSpeaker = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({role:"Speaker"})
    console.log("hello2")
    res.status(200).json({
      success: true,
      user,
    });
  });
  
  
  
  export const getAdminProfile = catchAsyncErrors(async (req, res, next) => {
    console.log("admin")
    const user = await User.find({isAdmin:true});
  
    
    console.log("hello")
    res.status(200).json({
      success: false,
      length: user.length,
      user,
    });
  });