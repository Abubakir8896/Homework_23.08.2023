const Joi = require("joi");
const {fetch, fetchOne} = require("../utils/pg")

const create = async (req, res) => {
  try {
    const {worker_id,product_id, kg, price} = req.body;

    const {error} = Joi.object({
      worker_id: Joi.number().required(),
      product_id: Joi.number().required(),
      kg: Joi.number().required(),
      price: Joi.number().required(),
    }).validate({worker_id,product_id, kg, price});

    if (error) return res.status(400).json({message: error.message});
    const product = await fetch("UPDATE product SET kg = kg-$1 WHERE id=$2;",kg, product_id)
    const history = await fetch("insert into history(workers_id, product_id, is_sell, kg, price) values($1,$2,$3,$4,$5)",worker_id, product_id, true, kg, price)
    res.json({product, history, message:"Update"})
  } catch (error) {
    res.json({message: "Internal Server Error"});
}
};
module.exports = {create};
