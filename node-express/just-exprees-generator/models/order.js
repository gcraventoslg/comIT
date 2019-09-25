"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      address: DataTypes.STRING
    },
    {}
  );
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsToMany(models.Product, {
      through: "ProductOrders",
      as: "products",
      foreignKey: "orderId",
      otherKey: "productId"
    });
  };
  return Order;
};
