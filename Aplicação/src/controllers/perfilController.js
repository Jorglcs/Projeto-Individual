var perfilModel = require("../models/perfilModel");

function maiorAndar(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    perfilModel
      .maiorAndar(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function mediaAndar(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    perfilModel
      .mediaAndar(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}
function quantidadeTentativas(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    perfilModel
      .quantidadeTentativas(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function totalInimigosDerrotados(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    perfilModel
      .totalInimigosDerrotados(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}
function historicoAndar(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    perfilModel
      .historicoAndar(idUsuario)
      .then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buffTotal(req, res) {
  var idUsuario = req.params.idUsuario;
  if (idUsuario == undefined) {
    res.status(400).send;
    ("O id do usuario está undefined");
  } else {
    perfilModel
      .buffTotal(idUsuario)
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
  maiorAndar,
  mediaAndar,
  quantidadeTentativas,
  totalInimigosDerrotados,
  historicoAndar,
  buffTotal
};
