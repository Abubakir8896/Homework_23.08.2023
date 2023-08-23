const worker_route = require("../routes/workers.route");
const category_route = require("../routes/category.route")
const product_route = require("../routes/products.route")
const sell = require("../routes/sell.route")
const buy = require("../routes/buy.route")
const history = require("../routes/history.route")

module.exports = [worker_route, category_route, product_route, sell, buy, history];
