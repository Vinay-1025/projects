const {Sequelize,sequelize}=require('./connection')



module.exports=Leave=sequelize.define('leave',{
    applicationId:{
            type:Sequelize.DataTypes.STRING,
            allowNull:false,
            primaryKey:true
    },
    userName:{
        type:Sequelize.DataTypes.STRING,
    },
    userId:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    mobile:{
        type:Sequelize.DataTypes.STRING,
    },
    year:{
        type:Sequelize.DataTypes.STRING,
    },
    branch:{
        type:Sequelize.DataTypes.STRING,
    },
    section:{
        type:Sequelize.DataTypes.STRING,
    },
    email:{
        type:Sequelize.DataTypes.STRING,   
    },
    parentName:{
        type:Sequelize.DataTypes.STRING,
    },
    parentMobile:{
        type:Sequelize.DataTypes.STRING,
    },
    outDate:{
        type:Sequelize.DataTypes.DATE
    },
    inDate:{
        type:Sequelize.DataTypes.DATE
    },
    reason:{
        type:Sequelize.DataTypes.STRING
    },
    approved:{
        type:Sequelize.DataTypes.STRING,
        defaultValue:'pending'
    }
},{
    freezeTableName:true,
    timestamps:false
})

