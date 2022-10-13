import mongoose from 'mongoose'; 


const userSchema = new mongoose.Schema({ 
    username : { 
        type : String, 
        default : 'User'
    },
    email:{ 
        type: String
    } , 
    password:{ 
        type: String,
        required : true 
    }, 
    image:{ 
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.png' 
    }
}, {timestamps: true}); 

export default mongoose.models.User || mongoose.model('User', userSchema);