const Joi = require("joi");
const {fetch, fetchOne} = require("../utils/pg")

const create = async (req, res) => {
    try {
      const {name, kg, price, category_id} = req.body;
  
      const {error} = Joi.object({
        name: Joi.string().required(),
        kg: Joi.number().required(),
        price: Joi.number().required(),
        category_id: Joi.number().required(),
      }).validate({name, kg, price, category_id});
  
      if (error) return res.status(400).json({message: error.message});
      const product = await fetch("insert into product(name, kg, price, category_id) values($1, $2, $3, $4)",name, kg, price, category_id)
      res.json({product, message:"Success"})
    } catch (error) {
        console.log(error);
      res.json({message: "Internal Server Error"});
  }
};
const getAllproduct = async(req,res) => {
    const products = await fetch("select * from product")

    res.json({products})
}
const getOneproduct = async(req,res) => {
    const {id} = req.params;
    const Oneproduct = await fetchOne("select * from product where id=$1",id)

    res.json({Oneproduct})
}
const deleteproduct = async(req,res) => {
    const {id} = req.params;
    const Oneproduct = await fetchOne("delete from product where id=$1",id)

    res.json({Oneproduct,message:"Deleted"})
}
module.exports = {create, getAllproduct, getOneproduct, deleteproduct};
