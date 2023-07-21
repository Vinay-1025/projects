
const {Sequelize,sequelize}=require('../connection/connection')

const Leave=require('../connection/leaveModel')


const getApplyLeave=async (req,res)=>{
    res.render('leave')
    // res.send("hello")    
}

const postAppliedLeave=async(req,res)=>{
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var length = 10;
        var router_id = "";
        for (var i = 0; i <= length; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            router_id += chars.substring(randomNumber, randomNumber +1);
           }
           console.log(req.body)
           const newLeave=req.body;
           newLeave.routerlicationId=router_id;
           
    const newrouterlication=await Leave.create(newLeave)
    
    res.send(req.body)
}

const showAllLeaves=async (req,res)=>{
    const leaves=await Leave.findAll({where:{userName:req.params.userName}})

    console.log(leaves)
    
    res.render('leaveDetails',{leave:leaves})    
}

module.exports={getApplyLeave,postAppliedLeave,showAllLeaves}