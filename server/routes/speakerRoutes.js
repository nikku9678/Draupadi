import express from 'express';

import { updateSpeakerInfo,getVerifiedSpeaker} from '../controllers/speakerController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();



export default router;
