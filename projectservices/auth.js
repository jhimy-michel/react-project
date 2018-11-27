import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import models from './models';

const auth={
    getToken: ({_id})=>{
        const newToken =  jwt.sign({user:_id},process.env.SECRET,{expiresIn:'10s'});
        //const refreshToken = jwt.sign({user:_id},process.env.SECRET,{expiresIn:'10m'});
        return [newToken];
    },
    login:async (username,password,User)=>{
        const user = await User.findOne({username});
        if(!user){
            return{
                success:false,
                errors:[{paths:'username',message:'username no existe joven'}]
            }
        }
        const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword){
            return{
                success:false,
                errors:[{paths:'password',message:'tu password no existe joven'}]
            }
        }
        const [newToken] = auth.getToken(user)
        return{
            success:true,
            token:newToken,
            errors:[]
        }
    },
    checkHeaders: async (req,res,next)=>{
        //console.log("User id",req.user);
        const token = req.headers["x-token"];
        //console.log(token)
        if(token){
            try{
                const {user} = jwt.verify(token,process.env.SECRET);
                req.user=user;
                
            }catch(e){
                const newToken = await auth.checkToken(token)
                console.log(newToken)
                req.user = newToken.user
                if(newToken.token){
                    res.set("Access-Control-Expose-Header","x-token")
                    res.set("x-token",newToken.token)
                } 
            }
        }
        next()
    },
    checkToken: async(token)=>{
        let idUser=null;
        try{
            const {user} = await jwt.decode(token);
            idUser=user;
        }catch(e){
            return{}
        }
        const user = await models.User.findOne({_id:idUser});
        //console.log("xxxx:",user);
        const [newToken] =  auth.getToken(user)
        return{
            user:user._id,
            token: newToken
        }
    }
}
export default auth;