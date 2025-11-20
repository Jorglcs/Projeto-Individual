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

router.get("/buscarAtaquesBasicos/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buscarAtaquesBasicos
  relatorioController.buscarAtaquesBasicos(req, res);
});

router.get("/buscarAtaquesEspeciais/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buscarAtaquesEspeciais
  relatorioController.buscarAtaquesEspeciais(req, res);
});

router.get("/buscarInimigosDerrotados/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buscarInimigosDerrotados
  relatorioController.buscarInimigosDerrotados(req, res);
});

router.get("/buscarAtaquesCriticos/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buscarAtaquesCriticos
  relatorioController.buscarAtaquesCriticos(req, res);
});

router.get("/buscarGraficoDano/:idUsuario", function (req, res) {
  // função a ser chamada quando acessar /relatorio/buscarGraficoDano
  relatorioController.buscarGraficoDano(req, res);
});

module.exports = router;
