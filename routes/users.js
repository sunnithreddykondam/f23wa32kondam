var express = require("express");
var router = express.Router();
sum = 0;
more = 0;
/* GET users listing. */
router.get("/", function (req, res, next) {
  more = more + 1;
  sum += more;
  var response = `Sum is ${sum}`;
  res.send(response);
});

module.exports = router;
