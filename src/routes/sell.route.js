const {Router} = require("express");
const {create} = require("../controllers/sell.controller");

const router = Router();

router.post("/sell", create);

module.exports = router;
