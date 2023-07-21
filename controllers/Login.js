const {Sequelize,sequelize}=require('../connection/connection')
const adminUser=require('../connection/adminUserModel')
const studentUser=require('../connection/studentUserModel')


const getAdminLogin=(req,res)=>{
    res.render('a_login')
}

const getStudentLogin=(req,res)=>{
    res.render('s_login')
}

const postStudentLogin=async (req,res)=>{
    const result=await studentUser.findOne({where:{userName:req.body.userName}})

    if(result)
    {
        if(result.password==req.body.password)
        {
           return res.send("successfull login")
        }
        else{
            return res.send("wrong password")
        }
    }
    else{
        return res.json({msg:"user dosent exist"})
    }
    


}

const postAdminLogin=async (req,res)=>{
    const result=await adminUser.findOne({where:{adminName:req.body.adminName}})

    if(result)
    {
        if(result.password==req.body.password)
        {
            console.log("successfull login")
           return res.send("successfull login")
        }
    }
    else{
        console.log("admin dosent exist")
        return res.json({msg:"sorry admin dosent exist"})
    }
    
}

module.exports={getAdminLogin,getStudentLogin,postAdminLogin,postStudentLogin}