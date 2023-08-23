const {Router} = require("express");
const {create, getcategory} = require("../controllers/category.controller");

const router = Router();

router.post("/category", create);
router.get("/category",getcategory)

module.exports = router;
