const sequelize = require("../utils/sequerize");
const {DataTypes} = require ("sequelize")

const Roles = sequelize.define("roles", {
    ID_ROLE : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    DESCRIPTION_ROLE: {
            type: DataTypes.STRING(255),
            allowNull: false
    }
},{
        freezeTableName: true,
        tableName: 'roles',
        timestamps: false
})


module.exports = Roles