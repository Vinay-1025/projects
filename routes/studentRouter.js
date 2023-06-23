const express=require('express')

const router=express.Router()
const getHomePage=require('../controllers/getHomePage')
const loginControllers=require('../controllers/Login')
const signUpControllers=require('../controllers/signup')
const leaveControllers=require('../controllers/leave')
const outingControllers=require('../controllers/outings')

router.get('/',getHomePage)

router.get('/stuLoginPage',loginControllers.getStudentLogin)
router.post('/student-login',loginControllers.postStudentLogin)

router.get('/stuSignUpPage',signUpControllers.getStudentSignUp)
router.post('/student-signup',signUpControllers.postStudentSignUp)

router.get('/apply-leave',leaveControllers.getApplyLeave)
router.post('/submit-leave',leaveControllers.postAppliedLeave)
router.get('/showleaves/:userName',leaveControllers.showAllLeaves)
router.get('/apply-outing/:userId',outingControllers.getApplyOuting)
router.post('/submit-outing',outingControllers.postAppliedOuting)
    
    
    
    module.exports=router