const roomtypemodel = require('../model/Roomtypemodel');
exports.insertbookingmodel = async (req, res) => {
    try {

        // const newdatas = new bookingmodel({
        //     name:req.body.name,
        //     adate:req.body.adate,
        //     ddate:req.body.ddate,
        //     child:req.body.child,
        //     adult:req.body.adult,
        //     room:req.body.room
        // })
        const newdatas1 = await roomtypemodel.create(req.body)
        // await newdatas.save()
        res.json("inserted successfully")
    }
    catch (error) {
        res.json({ msg: error.msg })

    }
}
exports.displaybookingmodel = async (req, res) => {
    try {
        const formdatas = await roomtypemodel.find()
        res.json(formdatas);
    }
    catch (error) {

    }
}
exports.deletebookingmodel = async (req, res) => {
    try {
        const deletedatas = await roomtypemodel.findByIdAndDelete(req.params.id)
        res.json("deletedddddd");
    }
    catch (error) {

    }
}
exports.updatebookingmodel = async (req, res) => {
    try {
        let datas = await roomtypemodel.findById(req.params.id)
        if (!datas) {
            return res.json("booking not found");
        }
        datas = await roomtypemodel.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true

        })
        res.json("updated successfully")
    }
    catch (error) {

    }
}



exports.bookingcount = async(req, res) => {
   const hotelid=req.params.id;
   const bookrooms = parseInt(req.body.bookroom)
    try{
        const hotel = await roomtypemodel.findByIdAndUpdate(
            hotelid,
            { $inc: { availableRoom: -1 } },
            { new: true }
          );
      
          // Check if the hotel has any available rooms left
          if (hotel.availableRoom <= 0) {
            res.status(409).json({ error: 'No available rooms left' });
            return;
          }
      
          // Return the updated hotel data
          res.json(hotel);

    }catch(err){

    }
}