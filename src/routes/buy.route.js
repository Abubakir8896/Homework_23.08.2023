const {Router} = require("express");
const {create} = require("../controllers/buy.controller");

const router = Router();

router.post("/buy", create);

module.exports = router;
