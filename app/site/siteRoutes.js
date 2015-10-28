var express = require("express");
var join = require("path").join;

var router = new express.Router();

function index(req, res, next) {
  res.render("site/index")
}


router.use(express.static(join(__dirname, "../../wwwroot")));
router.get("/", index);

module.exports = router;

