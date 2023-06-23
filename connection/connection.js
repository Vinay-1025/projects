const Sequelize=require('sequelize')

const sequelize=new Sequelize('leavemanagement','root','AMma@143',{
    dialect:'mysql'
})








// Leave.sync({alter:true})
// Outing.sync({alter:true})
// Month.sync({alter:true})


module.exports={Sequelize,sequelize}


