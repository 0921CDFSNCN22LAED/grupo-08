module.exports = (sequelize, dataTypes)=> {
let alias = 'User'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        dateBirth: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false
        }, 
        streetAdress : {
            type : dataTypes.BIGINIT(100),
            allowNull: false,
        }
    }
        let config = {
        tableName: "user",
        timestamps: true,
}
const User = sequelize.define(alias,cols,config);
return User
};