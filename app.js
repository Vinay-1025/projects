const express=require('express');
const path=require('path')
// const connection=require('./connection/connection')
const {Sequelize,sequelize}=require('./connection/connection')
const adminUser=require('./connection/adminUserModel')
const studentUser=require('./connection/studentUserModel')
const Leave=require('./connection/leaveModel')
const Outing=require('./connection/outingModel')
const Month=require('./connection/monthCheckModel')



const app=express();
const studentRouter=require('./routes/studentRouter')
const adminRouter=require('./routes/admin')


app.use(express.urlencoded({extended:false}))


app.use(express.static(path.join(__dirname,"/public")))

app.set('view engine','ejs')
app.set('views','views')

app.use(studentRouter)
app.use(adminRouter)


app.listen(4000,()=>{
    console.log("server running on the port 3000")
})

