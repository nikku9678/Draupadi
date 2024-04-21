import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Organizer } from "../models/organizerSchema.js";
import { RequestEvent } from "../models/requestEventModel.js";

export const postRequestToSpeaker = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    message, 
    time,
  } = req.body;
  if (
    !name ||
    !message ||
    !time 
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  
  const orgId = req.user._id;
  const eventRequest = await RequestEvent.create({
    name,
    message,
    time,
    orgId,
    spkId,
  });
  res.status(200).json({
    success: true,
    eventRequest,
    message: "Appointment Send!",
  });
});
