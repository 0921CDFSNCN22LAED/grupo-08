module.exports = (sequelize, dataTypes) => {
    let alias = 'Orders'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        oderDate: {
            type: dataTypes.DATE,
            allowNull: false
        },
        
    };
    let config = {
        tableName: "oders",
        timestamps: true,
        
    }
    const Orders = sequelize.define(alias,cols,config);

   

    return Orders
};
