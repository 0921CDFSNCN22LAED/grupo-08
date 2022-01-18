module.exports = (sequelize, dataTypes) => {
    let alias = 'Price'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        price: {
            type: dataTypes.INTEGRAL,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGRAL,
            allowNull: false
        },
        
    };
    let config = {
        tableName: "price",
        timestamps: true,
        
    }
    const User = sequelize.define(alias,cols,config);

   

    return Price
};
