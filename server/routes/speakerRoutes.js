import express from 'express';

import { updateSpeakerInfo,getVerifiedSpeaker,getOneSpeaker,postSpeakerInfo, getSpeakerInfo,getAllNotification} from '../controllers/speakerController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();
router.get("/info/:id",getOneSpeaker);
router.post("/post/info",isAuthenticate,postSpeakerInfo);
router.get("/info",isAuthenticate,getSpeakerInfo);
router.get("/get-all-notification",isAuthenticate,getAllNotification);


export default router;
