const router = require("express").Router();
const create_post = require("./controller/create_post");
const fetch_posts = require("./controller/fetch_posts");

router.post("/create_post",create_post);
router.post ("/fetch_posts",fetch_posts);

module.exports = router;