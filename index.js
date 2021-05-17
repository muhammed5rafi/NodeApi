var Order = require("./Api/models/order.model");
const db = require("./Api/controller/orders.controller");

db.getOrders().then((result) => {
  console.log(result);
});
