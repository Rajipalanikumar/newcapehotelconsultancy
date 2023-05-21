const bookingmodel = require('../model/bookingmodel');
exports.insertbooking = async (req, res) => {
    try {
       
        // const newdatas = new bookingmodel({
        //     name:req.body.name,
        //     adate:req.body.adate,
        //     ddate:req.body.ddate,
        //     child:req.body.child,
        //     adult:req.body.adult,
        //     room:req.body.room
        // })
const newdatas=await bookingmodel.create(req.body)
        // await newdatas.save()
        res.json("inserted successfully")
    }
    catch (error) {
        res.json({msg:error.msg})

    }
}
exports.displaybooking = async (req, res) => {
    try {
       const formdatas=await bookingmodel.find()
       res.json(formdatas);
    }
    catch (error) {

    }
}
exports.deletebooking = async (req, res) => {
    try {
       const deletedatas=await bookingmodel.findByIdAndDelete(req.params.id)
       res.json("deletedddddd");
    }
    catch (error) {

    }
}
exports.updatebooking=async (req,res)=>{
    try{
let datas=await bookingmodel.findById(req.params.id)
if(!datas){
    return res.json("booking not found");
}
datas=await bookingmodel.findByIdAndUpdate(req.params.id,req.body,{
    new:true,runValidators:true

})
res.json("updated successfully")
    }
    catch(error){

    }
}