import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//update user
router.put("/:id",verifyToken,update);
//update user
router.delete("/:id",verifyToken,deleteUser);
//update user
router.get("/:id",getUser);
//update user
router.put("/:id",verifyToken,subscribe);
//update user
router.put("/:id",verifyToken,unsubscribe);
//update user
router.put("/:id",verifyToken,like);
//update user
router.put("/:id",verifyToken,dislike);

export default router;