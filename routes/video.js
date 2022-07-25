import express from 'express';
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';
const router = express.Router();

//create 
router.post("/",verifyToken,addVideo);
router.put("/:id",verifyToken,updateVideo);
router.delete("/:id",verifyToken,deleteVideo);
router.get("/find/:id",verifyToken,getVideo);
router.put("/view/:id",verifyToken,addView);
router.get("/trend",verifyToken,trend);
router.get("/random",verifyToken,random);
router.get("/sub",verifyToken,sub);
router.get("/tags",verifyToken,getByTag);
router.get("/search",verifyToken,search);

export default router;
