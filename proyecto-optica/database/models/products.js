module.exports = (sequelize, dataTypes) => {
    let alias = 'Products'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        productName: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        shortDescription: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        longDescription: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        
    };
    let config = {
        tableName: "products",
        timestamps: true,
        
    }
    const Products = sequelize.define(alias,cols,config);

    return Products
};