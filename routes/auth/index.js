const router = require("express").Router();
const sign_up_controller = require("./controllers/sign_up");
const sign_in_controller = require("./controllers/sign_in");

router.post("/sign_up",sign_up_controller);
router.post ("/sign_in",sign_in_controller);

module.exports = router;