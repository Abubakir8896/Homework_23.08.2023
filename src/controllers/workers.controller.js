const Joi = require("joi");
const {fetch, fetchOne} = require("../utils/pg")

const create = async (req, res) => {
  try {
    const {fullname, email, password} = req.body;

    const {error} = Joi.object({
      fullname: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }).validate({fullname, email, password});

    if (error) return res.status(400).json({message: error.message});
    const workers = await fetch("insert into workers(fullname, email, password) values($1, $2, $3)",fullname, email, password )
    res.json({workers, message:"Success"})
  } catch (error) {
    res.json({message: "Internal Server Error"});
}
};
const getAllWorkers = async(req,res) => {
    const workers = await fetch("select * from workers")

    res.json({workers})
}
module.exports = {create, getAllWorkers};
