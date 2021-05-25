const router = require("express").Router();
const create_post = require("./controller/create_post");
const fetch_posts = require("./controller/fetch_posts");
const fetch_owner = require("./controller/fetch_owner");

router.post("/create_post",create_post);
router.post ("/fetch_posts",fetch_posts);
router.post("/fetch_owner",fetch_owner);

module.exports = router;