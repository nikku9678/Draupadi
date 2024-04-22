import express from 'express';

import { getUserProfile, login, register,logout, getUserById} from '../controllers/userController.js';
import { isAuthenticate } from '../middlewares/auth.js';
import { getVerifiedSpeaker, updateSpeakerInfo,speakerPostEvents ,getSpeakerPost} from '../controllers/speakerController.js';
import { updateAsVerified } from '../controllers/adminController.js';

const router = express.Router();


// user routes
router.post("/login",login);
router.get("/logout",logout);
router.post("/register",register);
router.get("/profile",isAuthenticate,getUserProfile);
router.get("/verified-speaker",getVerifiedSpeaker);
router.get("/profile/:id",isAuthenticate,getUserById);


router.put("/update/:id",isAuthenticate,updateSpeakerInfo);
router.put("/update/verify/:id",isAuthenticate,updateAsVerified);
router.post("/post-event",isAuthenticate,speakerPostEvents);
router.get("/speaker-post",isAuthenticate,getSpeakerPost);
router.get("/verified-speaker",getVerifiedSpeaker);




export default router;
