const {Router} = require("express");
const {create, getAllWorkers} = require("../controllers/workers.controller");

const router = Router();

router.post("/workers", create);
router.get("/workers",getAllWorkers)

module.exports = router;
