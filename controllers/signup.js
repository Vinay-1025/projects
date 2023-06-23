const {Sequelize,sequelize}=require('../connection/connection')
const adminUser=require('../connection/adminUserModel')
const studentUser=require('../connection/studentUserModel')

const getAdminSignUp=(req,res)=>{
    res.render('a_signup')
}


const getStudentSignUp=(req,res)=>{
    res.render('s_signup')
}

const postAdminSignUp=async (req,res)=>{
        
    
    const result=await adminUser.findOne({where:{adminName:req.body.adminName}})

    if(result)
    {
        return res.send("sorry user already exists")
    }
    else{
        const newUser=await adminUser.create(req.body)

        return res.send("successfully created an account")
    }

}



const postStudentSignUp=async (req,res)=>{
    
    const result=await studentUser.findOne({where:{userName:req.body.userName}})

    if(result)
    {
        return res.send("sorry user already exists")
    }
    else{
        const newUser=await studentUser.create(req.body)

        return res.send("successfully created an account")
    }
}



module.exports={getAdminSignUp,getStudentSignUp,postAdminSignUp,postStudentSignUp}