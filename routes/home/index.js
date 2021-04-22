const home_controller = require("./controller");
const router = require("express").Router();

router.get("/",home_controller);

module.exports = router;