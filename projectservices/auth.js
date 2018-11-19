import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const auth={
    getToken: ({_id},SECRET)=>{
        const token = jwt.sign({user:_id},SECRET,{expiresIn:'5d'});
        const refreshToken = jwt.sign({user:_id},SECRET,{expiresIn:'10m'});
        return [token,refreshToken];
    },
    login:async (username,password,User,SECRET)=>{
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
        const [token,refreshToken] = auth.getToken(user,SECRET)
        return{
            success:true,
            token,
            errors:[]
        }
    }
}
export default auth;