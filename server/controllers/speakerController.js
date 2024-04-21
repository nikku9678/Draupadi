import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
import { Info } from "../models/infoModel.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";
import { SpeakerPost } from "../models/speakerSchema.js";

export const getVerifiedSpeaker = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({role:"Speaker",verified:true})
    console.log("verified speaker")
    res.status(200).json({
      success: true,
      user,
    });
  });
export const getAllNotification = catchAsyncErrors(async (req, res, next) => {
  console.log("notification")
  const user=req.user
    console.log("verified speaker",user)
    const notification = user.notification
    notification.push("t")
    res.status(200).json({
      success: true,
      notification,
    });
  });


export const getSpeakerPost = catchAsyncErrors(async (req, res, next) => {
    const speaker_post = await SpeakerPost.find({})
    console.log("verified speaker")
    res.status(200).json({
      success: true,
      speaker_post,
    });
  });
export const getSpeakerInfo = catchAsyncErrors(async (req, res, next) => {
  const user=req.user
    const info = await Info.find({user})
    console.log("verified speaker")
    res.status(200).json({
      success: true,
      info,
    });
  });


export const getOneSpeaker = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  try {
    const speaker = await User.findById(id);
    if (!speaker) {
      return next(new ErrorHandler("Job not found.", 404));
    }
    res.status(200).json({
      success: true,
      speaker,
    });
  } catch (error) {
    return next(new ErrorHandler(`Invalid ID / CastError`, 404));
  }
  });



export const speakerPostEvents = catchAsyncErrors(async (req, res, next) => {
  // const user=req.user
  const {organizer, time, venue,desc, links} =req.body
  if (!organizer || !time || !venue || !desc || !links) {
    return res.status(400).send({
      error: "Fill all fileds",
    });
  }

  await SpeakerPost.create({
    organizer,
    desc,
    time,
    venue,
    links,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Speaker Post created successfully",
  });

  });
export const postSpeakerInfo = catchAsyncErrors(async (req, res, next) => {
  // const user=req.user

  const {name, email, phone,experties,bio, qualification, country,city,industry,address,postalCode,dob,image,state,experience,company} =req.body
  if (!name || !email || !phone ||!experties || !bio || !qualification ||!country || !city || !address ||!postalCode || !dob||!image ||!industry || !experience || !state || !company ) {
    return res.status(400).send({
      error: "Fill all fileds",
    });
  }

  const info = await Info.create({
    name, email, phone,experties,bio, qualification, country,city,industry,address,postalCode,dob,image,state,experience,company,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Speaker info send successfully",
    info,
  });

  });

export const updateSpeakerInfo = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
  
    const { industry,qualification,experties,bio ,phone,country,city,address,verified ,experience} =
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
  