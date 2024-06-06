const {DataTypes} = require("sequelize")
const sequelize = require("../../utils/sequerize");
const Categories = require("../categorie/Categories");
// const sequelize = require("../utils/sequelize");

const Produits = sequelize.define('produits',{
    ID_PRODUIT :{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true},
    NOM_PRODUIT:{
        type:DataTypes.STRING(255),
        allowNull:false},
    DESCR_PRODUIT:{
        type:DataTypes.TEXT,
        allowNull:true},
    PRIX:{
        type:DataTypes.DECIMAL,
        allowNull:false},
    QUANTITE:{
        type:DataTypes.INTEGER,
        allowNull:false},
        
},{
    freezeTableName:true,
    tableName:"produits",
    timestamps:false
})

Produits.belongsTo(Categories,  { as: 'categories', foreignKey: "ID_CATEGORIE" });

module.exports=Produits