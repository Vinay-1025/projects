const {Sequelize,sequelize}=require('../connection/connection')

const Outing=require('../connection/outingModel')


const getApplyOuting=async (req,res)=>{
    
    const outings=await Outing.findOne({where:{userId:req.params.userId}})
    console.log(leaves);
    if(outings)
    {
        if(outings.outings==4)
        {
            return res.send("u have used your all outings");
        }
        
    }
    res.render('outing')
}

const postAppliedOuting=async(req,res)=>{
    
        
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
           
    const newrouterlication=await Outing.create(newLeave)
    
    res.send(req.body)
}

module.exports={getApplyOuting,postAppliedOuting};