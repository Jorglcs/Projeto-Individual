var database = require("../database/config");

function listar() {
  var instrucao = `
        SELECT * FROM corrida;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(
  fkUsuario,
  andarAlcancado,
  inimigos,
  danoTotal,
  danoRecebido,
  qtdAtaqueBasico,
  qtdAtaqueEspecial,
  qtdCritico,
  qtdZeus,
  qtdAres,
  qtdPoseidon,
  qtdFontes,
  qtdCentauro
) {
  var instrucao = `
        INSERT INTO corrida (fkUsuario,andarAlcancado,danoTotalCausado,danoTotalRecebido,inimigosDerrotados,totalAtaquesBasicos,totalAtaquesEspeciais,totalAtaquesCriticos,qtdAres,qtdZeus,qtdPoseidon,qtdCoracao,qtdFontes,fkJogo) VALUES ('${fkUsuario}','${andarAlcancado}','${danoTotal}','${danoRecebido}','${inimigos}','${qtdAtaqueBasico}','${qtdAtaqueEspecial}','${qtdCritico}','${qtdAres}','${qtdZeus}','${qtdPoseidon}','${qtdCentauro}','${qtdFontes}',1);
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarAndarAlcancado(idUsuario) {
  var instrucao = `
   select andarAlcancado from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}
function buscarAtaquesBasicos(idUsuario) {
  var instrucao = `
  select totalAtaquesBasicos from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function buscarAtaquesEspeciais(idUsuario) {
  var instrucao = `
  select totalAtaquesEspeciais from corrida join usuario on fkUsuario = idUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 1;
  `;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function buscarInimigosDerrotados(idUsuario) {
  var instrucao = `select inimigosDerrotados from corrida join usuario on idUsuario=fkUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function buscarAtaquesCriticos(idUsuario) {
  var instrucao = `select totalAtaquesCriticos from corrida join usuario on idUsuario=fkUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function buscarGraficoDano(idUsuario) {
  var instrucao = `select danoTotalCausado as danoCausado, danoTotalRecebido as danoRecebido from corrida
	join usuario on idUsuario = fkUsuario
  where idUsuario = ${idUsuario}
    order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function buscarGraficoPortas(idUsuario) {
  var instrucao = `select qtdAres as 'BencaoDeAres',qtdZeus as 'BencaoDeZeus',qtdPoseidon as 'BencaoDePoseidon',qtdFontes as 'FonteDeCura', qtdCoracao as 'CoracaoDeCentauro' from corrida join usuario on idUsuario = fkUsuario where idUsuario = ${idUsuario} order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
  listar,
  buscarAndarAlcancado,
  buscarAtaquesBasicos,
  buscarAtaquesEspeciais,
  buscarInimigosDerrotados,
  buscarAtaquesCriticos,
  buscarGraficoDano,
  buscarGraficoPortas,
};
