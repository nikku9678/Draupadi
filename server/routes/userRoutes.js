import express from 'express';

import { getUserProfile, login, register ,getAdminProfile,logout,getAllSpeaker,updateSpeakerInfo} from '../controllers/userController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router = express.Router();

// user routes
router.post("/login",login);
router.get("/logout",logout);
router.post("/register",register);
router.get("/profile",isAuthenticate,getUserProfile);



// speaker routes
router.put("/update/:id",isAuthenticate,updateSpeakerInfo);
router.get("/all-speaker",getAllSpeaker);
router.get("/admin",getAdminProfile);


export default router;
