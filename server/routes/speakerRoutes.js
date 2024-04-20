import express from 'express';

import { updateSpeakerInfo,getVerifiedSpeaker,getOneSpeaker} from '../controllers/speakerController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();
router.get("/info/:id",getOneSpeaker);


export default router;
