import mongoose, { mongo } from 'mongoose';

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:String,
    desc:String,
    bio:String,
    email:String,
    tumbnail:String,
    posts:{
        type:[],
        default:[]
    },
    following:{
        type:[],
        default:[]
    },
    followers:{
        type:[],
        default:[]
    }
});

const UserModel = mongoose.model('User',UserSchema);
export default UserModel;