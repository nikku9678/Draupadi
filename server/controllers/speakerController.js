import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
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
export const getSpeakerPost = catchAsyncErrors(async (req, res, next) => {
    const speaker_post = await SpeakerPost.find({})
    console.log("verified speaker")
    res.status(200).json({
      success: true,
      speaker_post,
    });
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
  