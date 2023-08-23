const {fetch, fetchOne} = require("../utils/pg")

const getAll = async(req,res) => {
    const history = await fetch("select * from history;")

    res.json({history})
}
module.exports = {getAll};
