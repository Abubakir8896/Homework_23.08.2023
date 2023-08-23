const Joi = require("joi");
const {fetch, fetchOne} = require("../utils/pg")

const create = async (req, res) => {
  try {
    const {name} = req.body;

    const {error} = Joi.object({
      name: Joi.string().required(),
    }).validate({name});

    if (error) return res.status(400).json({message: error.message});
    const category = await fetch("insert into category(name) values($1)",name)
    res.json({category, message:"Success"})
  } catch (error) {
    res.json({message: "Internal Server Error"});
}
};
const getcategory = async(req,res) => {
    const category = await fetch("select * from category")

    res.json({category})
}
module.exports = {create, getcategory};
