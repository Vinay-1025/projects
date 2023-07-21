const {Sequelize,sequelize}=require('./connection')


module.exports=studentUser=sequelize.define('student',{
    userName:{
        type:Sequelize.DataTypes.STRING,

    },
    userId:{
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

