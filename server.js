const express=require('express');
const cors=require('cors');
// const bodyParser=require('body-parser');

const app=express();
const db=require("./config/connection")();



// app.put('/rooms/:roomNumber/:roomType', async (req, res) => {
//     const { roomNumber, roomType } = req.params;
//     const room = await roomtypes.findOne({ roomNumber, roomType });
//     if (!room) return res.status(404).send('Room not found');
//     room.availabilityCount -= 1;
//     await room.save();
//     res.send(room.availabilityCount);
//   });

const {insertbooking, displaybooking, updatebooking, deletebooking}=require('./controller/bookingcontroller');
const { register, login } = require('./controller/usercontroller');
const { insertbookingmodel, updatebookingmodel, deletebookingmodel, displaybookingmodel, bookingcount } = require('./controller/Roomtypecontroller');


app.use(express.json())
// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: true, credentials: true}));
// app.use("/",(req,res)=>{
// // res.send("helooo");
// })
app.post("/insertbooking",insertbooking)

app.post("/register",register)
app.post("/login",login)
app.post("/insertbookingmodel",insertbookingmodel)
app.put("/updatebookingmodel/:id",updatebookingmodel)
app.delete("/deletebookingmodel/:id",deletebookingmodel)
app.get("/displaybookingmodel",displaybookingmodel)


app.get("/displaybookings",displaybooking)
app.put("/updatebooking/:id",updatebooking)
app.delete("/deletebooking/:id",deletebooking)


app.post('/booking/room/:id',bookingcount)

app.listen("4000",()=>{
    console.log("listeninggggg");
});