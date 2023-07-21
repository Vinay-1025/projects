const {Sequelize,sequelize}=require('./connection')


module.exports=adminUser=sequelize.define('admin',{
    adminName:{
        type:Sequelize.DataTypes.STRING,

    },
    adminId:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    password:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    }
},
{
    freezeTableName:true,
    timestamps:false
})