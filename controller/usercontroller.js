const usermodel=require('../model/usermodel')
exports.register =async(req,res)=>{
    try{
        const newdatas=await usermodel.create(req.body)
        // await newdatas.save()
        console.log(newdatas.role)
        res.json([{

            name:newdatas.name,
            address:newdatas.address,
            cnum:newdatas.cnum,
            role:newdatas.role

        }])
    }
    catch(error){
res.json({msg:error})
    }
}
exports.login=async(req,res)=>{
    try{
        let {name,pswd}=req.body
const user=await usermodel.findOne({name:name})
const pasd=await usermodel.findOne({pswd:pswd})

const roles=await usermodel.find()
console.log(roles.role)
if(!user){
    return res.json("user not found")
}
else if(!pasd){
    return res.json("pswd wronggg")
}
else{
return res.json([{
    name:user.name,
    address:user.address,
    cnum:user.cnum,
    role:user.role
}])
}
    }
    catch(error){

    }
}