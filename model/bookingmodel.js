const mongoose=require('mongoose');
const bookingschema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    adate:{
        type:Date,require:true
    },
    ddate:{
        type:Date,require:true
    },
    child:{
        type:Number,require:true
    },
    adult:{
        type:Number,require:true
    },
    roomtype:{
        type:String,require:true
    },
    
    room:{
        type:String,require:true
    },
    paid:{
        type:String,default:"paid"

    }
})

const booking=mongoose.model("bookings",bookingschema);
module.exports=booking;