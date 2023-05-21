const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    address:{
        type:String,require:true
    },
    cnum:{
        type:Number,require:true
    },
    pswd:{
        type:String,require:true
    },
    role:{
        type:String,default:"user"

    }
 
})

const userdetails=mongoose.model("userdetails",userSchema);
module.exports=userdetails;