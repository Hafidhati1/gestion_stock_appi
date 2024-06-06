
const sequelize = require("../utils/sequerize");
const {DataTypes} = require ("sequelize")

const Clients = sequelize.define("clients", {
    ID_CLIENT : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NOM_CLIENT: {
            type: DataTypes.STRING(255),
            allowNull: false
    },
    PRENOM_CLIENT: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ADDRESSE_CLIENT: {
        type: DataTypes.VARCHAR(255),
        allowNull: false
    },
    TEL_CLIENT: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    EMAIL_CLIENT: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
        freezeTableName: true,
        tableName: 'clients',
        timestamps: false
})


module.exports = Clients