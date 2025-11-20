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
  var andarAlcancado = req.body.andarAlcancadoServer;
  var inimigos = req.body.inimigosServer;
  var danoTotal = req.body.danoTotalServer;
  var danoRecebido = req.body.danoRecebidoServer;
  var qtdAtaqueBasico = req.body.qtdAtaqueBasicoServer;
  var qtdAtaqueEspecial = req.body.qtdAtaqueEspecialServer;
  var qtdCritico = req.body.qtdCriticoServer;
  var qtdBencaos = req.body.qtdBencaosServer;
  var qtdZeus = req.body.qtdZeusServer;
  var qtdAres = req.body.qtdAresServer;
  var qtdPoseidon = req.body.qtdPoseidonServer;
  var qtdFontes = req.body.qtdFontesServer;
  var qtdCentauro = req.body.qtdCentauroServer;
  var fkUsuario = req.body.fkUsuarioServer;

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
  } else if (fkUsuario == undefined) {
    res.status(400).send("Seu fkUsuario está undefined!");
  } else {
    relatorioModel
      .cadastrar(
        fkUsuario,
        andarAlcancado,
        inimigos,
        danoTotal,
        danoRecebido,
        qtdAtaqueBasico,
        qtdAtaqueEspecial,
        qtdCritico,
        // qtdBencaos,
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

function buscarAndarAlcancado(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    relatorioModel
      .buscarAndarAlcancado(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarAtaquesBasicos(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    relatorioModel
      .buscarAtaquesBasicos(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}
function buscarAtaquesEspeciais(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    relatorioModel
      .buscarAtaquesEspeciais(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}
function buscarInimigosDerrotados(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    relatorioModel
      .buscarInimigosDerrotados(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarAtaquesCriticos(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send("o id do  usuario esta undefined");
  } else {
    relatorioModel
      .buscarAtaquesCriticos(idUsuario)
      .then(function (resultado) {
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarGraficoDano(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    relatorioModel
      .buscarGraficoDano(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  listar,
  cadastrar,
  buscarAndarAlcancado,
  buscarAtaquesBasicos,
  buscarAtaquesEspeciais,
  buscarInimigosDerrotados,
  buscarAtaquesCriticos,
  buscarGraficoDano,
};
