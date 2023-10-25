var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  var paramX = parseFloat(req.query.x);

  if (!isNaN(paramX)) {
    const pow = Math.pow(paramX, paramY);
    const sign = Math.sign(paramX);
    const tanh = Math.tanh(paramX);
    const trunc = Math.trunc(paramX);

    const response = `
      sign() applied to ${paramX} is ${sign}<br>
      tanh() applied to ${paramX} is ${tanh}<br>
      trunc() applied to ${paramX} is ${trunc}<br>
    `;
    res.send(response);
  } else {
    const X = Math.random() * 100;

    const pow = Math.pow(X);
    const sign = Math.sign(X);
    const tanh = Math.tanh(X);
    const trunc = Math.trunc(X);

    const response = `
      sign() applied to ${X} is ${sign}<br>
      tanh() applied to ${X} is ${tanh}<br>
      trunc() applied to ${X} is ${trunc}<br>
    `;
    res.send(response);
  }
});
module.exports = router;
