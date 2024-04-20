import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Help } from "../models/messageModel.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    console.log("message")
    const { name, email,phone,message} = req.body;
    if (!name || !email | !phone || !message ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
  
    const msg = await Help.create({
        name,email,phone,message
    })

    res.status(200).json({
        success: true,
        message: "Message send successfully",
        msg,
      });

  });
  