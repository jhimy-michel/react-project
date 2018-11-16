import mongoose, { mongo } from 'mongoose';

const PostSchema = mongoose.Schema({
    by:{
        type:{},
        required:true
    },
    likedBy:{
        type:[],
        default:[]
    },
    desc:String,
    photo:String,
    comments:{
        type:[],
        default:[]
    },
    createdAt:{
        type:String,
        default:new Date
    }
});

const PostModel = mongoose.model('Post',PostSchema);
export default PostModel;