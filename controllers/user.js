import User from "../models/User.js";
import { createError } from "../error.js";
import bcrypt from 'bcryptjs'

//update
export const update = async (req, res, next) => {
    const {password} = req.body;
    if (req.params.id === req.user.id) {
        try {
            if(password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt);
            }
            const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updateUser);
        } catch (error) {
            next(error);
        }
    }else{
        return next(createError(403,"You can update only your account!"));
    }
}
//deleteUser
export const deleteUser = async (req, res, next) => {

}
//getUser
export const getUser = async (req, res, next) => {

}
//subscribe
export const subscribe = async (req, res, next) => {

}
// unsubscribe
export const unsubscribe = async (req, res, next) => {

}
//like
export const like = async (req, res, next) => {

}
// dislike
export const dislike = async (req, res, next) => {

}