import mongoose, { Mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlbSV-T3Hw-JlgQm87e6MZWyPlq57ezpyH-R_f2Pu-Q&s",
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);


export default User;