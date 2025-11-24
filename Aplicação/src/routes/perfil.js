var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/maiorAndar/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/maiorAndar
  perfilController.maiorAndar(req, res);
});

router.get("/mediaAndar/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/mediaAndar
  perfilController.mediaAndar(req, res);
});

router.get("/quantidadeTentativas/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/quantidadeTentativas
  perfilController.quantidadeTentativas(req, res);
});

router.get("/totalInimigosDerrotados/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/totalInimigosDerrotados
  perfilController.totalInimigosDerrotados(req, res);
});

router.get("/historicoAndar/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/historicoAndar
  perfilController.historicoAndar(req, res);
});

router.get("/buffTotal/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buffTotal
  perfilController.buffTotal(req, res);
});
module.exports = router;
