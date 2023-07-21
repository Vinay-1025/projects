const {Sequelize,sequelize}=require('./connection')



module.exports=Month=sequelize.define('month',{
    month:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:6
    }
},{
    freezeTableName:true,
    timestamps:false
})