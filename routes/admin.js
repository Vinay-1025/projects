const express=require('express')
const router=express.Router()

const loginControllers=require('../controllers/Login')
const signUpControllers=require('../controllers/signup')

router.post('/admin-login',loginControllers.postAdminLogin)
router.get('/adminSignUpPage',signUpControllers.getAdminSignUp)
router.get('/adminLoginPage',loginControllers.getAdminLogin)
// router.post('/student-signup',signUpControllers.postStudentSignUp)
router.post('/admin-signup',signUpControllers.postAdminSignUp)

router.get('/showAllLeaves/:adminName',async (req,res)=>{
    
    const leaves=await Leave.findAll({where:{routerroved:'pending'}})

    const check=await adminUser.findOne({where:{adminName:req.params.adminName}})

    if(check)
    {
        router.send("all leaves page which are pending");
    }
})


router.get('/showApprovedLeaves',async (req,res)=>{
    const leaves=await Leave.findAll({where:{approved:'approved'}})
    
})

router.get('/showRejectedLeaves',async (req,res)=>{
    const leaves=await Leave.findAll({where:{approved:'rejected'}})
    
})


module.exports=router