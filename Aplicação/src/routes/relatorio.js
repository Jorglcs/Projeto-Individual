var express = require("express");
var router = express.Router();

var relatorioController = require("../controllers/relatorioController");

router.post("/cadastrar", function (req, res) {
  // função a ser chamada quando acessar /relatorio/cadastrar
  relatorioController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
  // função a ser chamada quando acessar /relatorio/listar
  relatorioController.listar(req, res);
});

router.get("/buscarAndarAlcancado/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buscarAndarAlcancado
  relatorioController.buscarAndarAlcancado(req, res);
});
module.exports = router;
