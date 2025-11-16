var relatorioModel = require("../models/relatorioModel");

function listar(req, res) {
  relatorioModel
    .listar()
    .then(function (resultado) {
      // precisamos informar que o resultado voltará para o front-end como uma resposta em json
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
  var andarAlcancado = req.body.andarAlcancadoVar;
  var inimigos = req.body.inimigosVar;
  var danoTotal = req.body.danoTotalVar;
  var danoRecebido = req.body.danoRecebidoVar;
  var qtdAtaqueBasico = req.body.qtdAtaqueBasicoVar;
  var qtdAtaqueEspecial = req.body.qtdAtaqueEspecialVar;
  var qtdCritico = req.body.qtdCriticoVar;
  var qtdBencaos = req.body.qtdBencaosVar;
  var qtdZeus = req.body.qtdZeusVar;
  var qtdAres = req.body.qtdAresVar;
  var qtdPoseidon = req.body.qtdPoseidonVar;
  var qtdFontes = req.body.qtdFontesVar;
  var qtdCentauro = req.body.qtdCentauroVar;

  if (andarAlcancado == undefined) {
    res.status(400).send("Seu andarAlcancado está undefined!");
  } else if (inimigos == undefined) {
    res.status(400).send("Seu inimigos está undefined!");
  } else if (danoTotal == undefined) {
    res.status(400).send("Sua danoTotal está undefined!");
  } else if (danoRecebido == undefined) {
    res.status(400).send("Seu danoRecebido está undefined!");
  } else if (qtdAtaqueBasico == undefined) {
    res.status(400).send("Seu qtdAtaqueBasico está undefined!");
  } else if (qtdAtaqueEspecial == undefined) {
    res.status(400).send("Seu qtdAtaqueEspecial está undefined!");
  } else if (qtdCritico == undefined) {
    res.status(400).send("Seu qtdCritico está undefined!");
  } else if (qtdBencaos == undefined) {
    res.status(400).send("Seu qtdBencaos está undefined!");
  } else if (qtdZeus == undefined) {
    res.status(400).send("Seu qtdZeus está undefined!");
  } else if (qtdAres == undefined) {
    res.status(400).send("Seu qtdAres está undefined!");
  } else if (qtdPoseidon == undefined) {
    res.status(400).send("Seu qtdPoseidon está undefined!");
  } else if (qtdFontes == undefined) {
    res.status(400).send("Seu qtdFontes está undefined!");
  } else if (qtdCentauro == undefined) {
    res.status(400).send("Seu qtdCentauro está undefined!");
  } else {
    relatorioModel
      .cadastrar(
        andarAlcancado,
        inimigos,
        danoTotal,
        danoRecebido,
        qtdAtaqueBasico,
        qtdAtaqueEspecial,
        qtdCritico,
        qtdBencaos,
        qtdZeus,
        qtdAres,
        qtdPoseidon,
        qtdFontes,
        qtdCentauro
      )
      .then(function (resposta) {
        res.status(200).send("relatorio criado com sucesso");
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  listar,
  cadastrar,
};
