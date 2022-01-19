module.exports = (sequelize, dataTypes) => {
    let alias = "Car"
    let cols = {
        id : {
            type : dataTypes.BIGINIT(100),
            allowNull: false,
            primaryKey: true,
            autoincrement : true
        },
        orderDate : dataTypes.DATEONLYE,
        allowNull: false
    } 
let config = {
    tableName: "user",
    timestamps: true,
} 
const Car = sequelize.define(alias,cols,config);
return Car
};