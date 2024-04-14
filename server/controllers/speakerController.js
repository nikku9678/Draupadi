import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/generateToken.js";

export const getVerifiedSpeaker = catchAsyncErrors(async (req, res, next) => {
    const user = await User.find({role:"Speaker",verified:true})
    console.log("verified speaker")
    res.status(200).json({
      success: true,
      user,
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
  