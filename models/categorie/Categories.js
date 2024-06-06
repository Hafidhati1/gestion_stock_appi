const {DataTypes} = require("sequelize")
const sequelize = require("../../utils/sequerize")
// const sequelize = require("../utils/sequelize");

const Categories = sequelize.define('categories',{
    ID_CATEGORIE:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true},
    DESCR_CATEGORIE:{type:DataTypes.STRING(255),allowNull:false},
    
},{
    freezeTableName:true,
    tableName:"categories",
    timestamps:false
})



module.exports=Categories