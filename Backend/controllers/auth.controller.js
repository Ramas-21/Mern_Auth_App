import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) =>{
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword});

    try{
        await newUser.save()
        res.status(201).json({message: "user created successfully"});
    } catch (error){
        next(error);
    }
}

export const signin = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User does not exist'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Incorrect email or password'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: hashPassword, ...rest } = user._doc;
            const expiryDate = new Date(Date.now() + 3600000); // 1hour
            res.cookie('access_token', token, { httpOnly: true, expires: expiryDate });
        }
    } catch (error) {
        
    }
}