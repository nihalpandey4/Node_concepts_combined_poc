const router = require("express").Router();
const sign_up_controller = require("./controllers/sign_up");

router.post("/sign_up",sign_up_controller);

module.exports = router;