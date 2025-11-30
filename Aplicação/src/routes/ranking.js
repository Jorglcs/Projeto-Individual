var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/rankingAndar", function (req, res) {
  // função a ser chamada quando acessar /ranking/rankingAndar
  rankingController.rankingAndar(req, res);
});
router.get("/rankingTentativas", function (req, res) {
  // função a ser chamada quando acessar /ranking/rankingTentativas
  rankingController.rankingTentativas(req, res);
});


module.exports = router;