const {Router} = require("express");
const {getAll} = require("../controllers/history.controller");

const router = Router();

router.get("/history", getAll);

module.exports = router;
