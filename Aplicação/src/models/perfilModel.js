var database = require("../database/config");

function maiorAndar(idUsuario) {
  var instrucao = `select max(andarAlcancado) as maiorAndar from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function mediaAndar(idUsuario) {
  var instrucao = `select avg(andarAlcancado) as mediaAndar from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function quantidadeTentativas(idUsuario) {
  var instrucao = `select count(andarAlcancado) as quantidadeTentativas from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function totalInimigosDerrotados(idUsuario) {
  var instrucao = `select sum(inimigosDerrotados) as totalInimigosDerrotados from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function historicoAndar(idUsuario) {
  var instrucao = `select andarAlcancado from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 5;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function buffTotal(idUsuario) {
  var instrucao = `select sum(qtdAres) as totalAres, sum(qtdZeus) as totalZeus, sum(qtdPoseidon) as totalPoseidon, sum(qtdFontes) as totalFontes, sum(qtdCoracao) as totalCoracao from corrida join usuario on idUsuario = fkUsuario where idUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  maiorAndar,
  mediaAndar,
  quantidadeTentativas,
  totalInimigosDerrotados,
  historicoAndar,
  buffTotal,
};
