var database = require("../database/config");

function rankingAndar() {
  var instrucao = `select sum(qtdAres) as totalAres, sum(qtdZeus) as totalZeus, sum(qtdPoseidon) as totalPoseidon, sum(qtdFontes) as totalFontes, sum(qtdCoracao) as totalCoracao from corrida join usuario on idUsuario = fkUsuario where idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  rankingAndar
};