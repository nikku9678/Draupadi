import express from 'express';

import {getAdminProfile,getAllSpeaker,getAllUser,getVerifiedSpeaker} from '../controllers/adminController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();


router.get("/profile",isAuthenticate, getAdminProfile);
router.get("/all-speaker",isAuthenticate, getAllSpeaker);
router.get("/verified-speaker",isAuthenticate, getVerifiedSpeaker);
router.get("/all-user",isAuthenticate, getAllUser);


export default router;
