import express from 'express';

import {getAdminProfile,getAllSpeaker,getAllUser,getVerifiedSpeaker,getAllOrganization,getAllHelpMessage} from '../controllers/adminController.js';
import { isAuthenticate } from '../middlewares/auth.js';
import { getRecomendedSpk } from '../controllers/recomendedSpkController.js';

const router = express.Router();


router.get("/profile",isAuthenticate, getAdminProfile);
router.get("/all-speaker",isAuthenticate, getAllSpeaker);
router.get("/verified-speaker",isAuthenticate, getVerifiedSpeaker);
router.get("/all-user",isAuthenticate, getAllUser);
router.get("/all-org",isAuthenticate, getAllOrganization);
router.get("/all-msg",isAuthenticate, getAllHelpMessage);
router.get("/get-recomended-spk",isAuthenticate,getRecomendedSpk);

export default router;
