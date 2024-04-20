import express from 'express';
import { postRecomendedSpk } from '../controllers/recomendedSpkController.js';
import { isAuthenticate } from '../middlewares/auth.js';


const router = express.Router();


router.post("/info",postRecomendedSpk);
router.get("/get-recomended-spk",isAuthenticate,postRecomendedSpk);


export default router;
