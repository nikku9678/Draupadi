import express from 'express';

import { getUserProfile, login, register,logout} from '../controllers/userController.js';
import { isAuthenticate } from '../middlewares/auth.js';
import { getVerifiedSpeaker, updateSpeakerInfo ,getSpeakerPost} from '../controllers/speakerController.js';
import { postRequestToSpeaker } from '../controllers/organizerController.js';

const router = express.Router();


router.put("/update/:id",isAuthenticate,updateSpeakerInfo);
router.post("/req-event",isAuthenticate,postRequestToSpeaker);
router.get("/speaker-post",isAuthenticate,getSpeakerPost);
router.get("/verified-speaker",getVerifiedSpeaker);



export default router;
