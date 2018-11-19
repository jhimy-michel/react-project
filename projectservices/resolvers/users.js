import bcrypt from 'bcrypt';
import auth from '../auth.js';

const formatErrors=(error,otherError)=>{
    const errors=error.errors;
    let objErrors=[]
    if(errors){
        Object.entries(errors).map(error=>{
            const {path,message}=error[1];
            objErrors.push({path,message})
        })
        objErrors=objErrors.concat(otherError);
        return objErrors;
    }else if(otherError.length){
        return otherError;
    }
    
    const unknownError = {}
    switch(error.code){
        case 11000:
            unknownError.path="Duplicados"
            unknownError.message="dato duplicado"
            break;
        default:
            unknownError.path="Desconocido"
            unknownError.message=error.message
    }
    return [unknownError]
}
export default {
        Query:{
            allUsers:(parent,args,{models})=>models.User.find(),
            getUser:(parent,args,{models})=>models.User.findOne(args)
        },
        Mutation:{
            login: async(parent,{username,password},{models:{User},SECRET})=>auth.login(username,password,User,SECRET),
            createUser: async (parent,{password,...args},{models})=>{
                const otherError = []
                try{
                    if(password.length<8){
                        otherError.push({path:'password',message:'el password debe ser mayor a ocho caracteres'})
                    }
                    
                    if(otherError.length){
                        throw otherError;
                    }
                    const hashPassword = await bcrypt.hash(password,10)
                    const user = await models.User.create({...args,password:hashPassword});
                    return {
                        success: true,
                        errors:[]
                    };
                }catch(error){
                    return {
                        success:false,
                        errors:formatErrors(error,otherError)
                    };}
            }
        }
}