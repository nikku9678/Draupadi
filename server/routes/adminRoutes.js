import express from 'express';

import {getAdminProfile,getAllSpeaker} from '../controllers/adminController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();


router.get("/profile",isAuthenticate, getAdminProfile);
router.get("/all-speaker", getAllSpeaker);
router.get("/all-speaker", getAllSpeaker);


export default router;
