const {Router} = require("express");
const {create, getAllproduct, getOneproduct, deleteproduct} = require("../controllers/product.controller");

const router = Router();

router.post("/product", create);
router.get("/products",getAllproduct)
router.get("/product/:id",getOneproduct)
router.delete("/delete/:id",deleteproduct)

module.exports = router;
