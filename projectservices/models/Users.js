import mongoose from 'mongoose';
import validate from 'mongoose-validator';
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        validate: 
        [
            validate({
                validator:'isLength',
                arguments:[2,4],
                message:'el nombre de usuario debe contener entre {ARGS[0]} y {ARGS[1]}'
            }),
            validate({
                validator:'isAlphanumeric',
                message:'el nombre de usuario debe ser alphanumerico'
            })
        ]
    },
    password:String,
    desc:String,
    bio:String,
    email:{
        type:String,
        validate:validate({
            validator:'isEmail',
            message:'Introduce un email valido'
        })
    },
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