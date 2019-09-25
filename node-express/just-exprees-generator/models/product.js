"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL
    },
    {}
  );
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Order, {
      through: "ProductOrders",
      as: "order",
      foreignKey: "productId",
      otherKey: "orderId"
    });
  };
  return Product;
};
