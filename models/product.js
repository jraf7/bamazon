module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING,
            field: "product_name"
        },
        department_name: {
            type: DataTypes.STRING,
            field: "department_name"
        },

        price: {
            type: DataTypes.STRING,
            field: "price"
        },

        stock_quantity: {
            type: DataTypes.STRING,
            field: "stock_quantity"
        }
    });

    return Product;
}