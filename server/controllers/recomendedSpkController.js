import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { RecomendedSpk } from "../models/recomendedSpkModel.js";


export const postRecomendedSpk = catchAsyncErrors(async (req, res, next) => {
    console.log("message")
    const { name,speaker_name, speaker_id,speaker_email,speaker_phone} = req.body;
    if (!name ||! speaker_name || !speaker_id | !speaker_email || !speaker_phone ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
  
    const recomendedSpeaker = await RecomendedSpk.create({
        name,speaker_id,speaker_email,speaker_phone,speaker_name
    })

    res.status(200).json({
        success: true,
        message: "Message send successfully",
        recomendedSpeaker,
      });

  });
export const getRecomendedSpk = catchAsyncErrors(async (req, res, next) => {
    
  
    const spk = await RecomendedSpk.find({
    })

    res.status(200).json({
        success: true,
        message: "Message send successfully",
        spk,
      });

  });



  