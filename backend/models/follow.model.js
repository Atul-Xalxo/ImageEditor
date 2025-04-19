import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const followSchema = new Schema({
    follower:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    following:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
},{timeStamps:true});

export default mongoose.model("follow",followSchema)