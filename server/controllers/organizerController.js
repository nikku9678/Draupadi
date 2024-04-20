import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Organizer } from "../models/organizerSchema.js";

export const postRequestToSpeaker = catchAsyncErrors(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Speaker") {
    return next(
      new ErrorHandler("Employer not allowed to access this resource.", 400)
    );
  }


  const { name, email, desc, phone, address, time, eventId } = req.body;
  const organizerID = {
    user: req.user._id,
    role: "Organization",
  };
  if (!eventId) {
    return next(new ErrorHandler("Job not found!", 404));
  }
  const eventDetails = await Job.findById(eventId);
  if (!eventDetails) {
    return next(new ErrorHandler("Job not found!", 404));
  }

  const speakerID = {
    user: eventDetails.user,
    role: "Speaker",
  };
  if (
    !name ||
    !email ||
    !desc ||
    !phone ||
    !address ||
    !organizerID ||
    !speakerID 
  ) {
    return next(new ErrorHandler("Please fill all fields.", 400));
  }
  const eventRequest = await Organizer.create({
    name,
    email,
    desc,
    phone,
    address,
    organizerID,
    speakerID,
   
  });
  res.status(200).json({
    success: true,
    message: "Application Submitted!",
    eventRequest,
  });
});
