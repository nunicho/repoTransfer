import mongoose, {Schema} from "mongoose";


//Schema es una clase de Moongose
const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required:true,
        minLength:2,
        maxLength:50, 
    },
    apellido:{
        type: String,
        required:true,
        minLength:2,
        maxLength:50, 
    },
    email:{
        type:String,
        required:true
    },
    contrasena:{
        type:String,
        required:true,
        minLength:8,
        maxLength:10
    },
    estado:{
        type:String,
        required:true
    },

    perfil:{
        type:String,
        required:true
    }
})

// aqui realizamos el modelo
const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;