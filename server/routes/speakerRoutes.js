import express from 'express';

import { updateSpeakerInfo,getVerifiedSpeaker} from '../controllers/speakerController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

router.put("/update/:id",isAuthenticate,updateSpeakerInfo);
router.get("/verified-speaker",getVerifiedSpeaker);


export default router;
