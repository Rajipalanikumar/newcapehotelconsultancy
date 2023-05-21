const mongoose=require('mongoose');
const RoomtypeSchema=new mongoose.Schema({
   
    
    roomname:{
        type:String,require:true
    }, roomcount:{
        type:Number,required:true
    },imglink:{
      type:String,required:true
    },
    rate:{
      type:Number,required:true
    },
    availableRoom:{
      type:Number,
    }

})

const roomtypedetails=mongoose.model("roomtypedetails",RoomtypeSchema);
module.exports=roomtypedetails;
// const roomSchema = new mongoose.Schema({
//     roomNumber: { type: Number, required: true },
//     roomType: { type: String, enum: ['AC', 'non-AC'], required: true },
//     availabilityCount: { type: Number, required: true }
//   });
  
//   // API route to update availability count
//   const roombooking=mongoose.model("roomtypes",roomSchema);
// module.exports=roombooking;