import mongoose, { mongo } from 'mongoose';

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:String
});

const UserModel = mongoose.model('User',UserSchema);
export default UserModel;