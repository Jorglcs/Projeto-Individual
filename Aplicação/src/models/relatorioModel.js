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
  qtdAres,
  qtdZeus,
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
  select andarAlcancado from corrida where fkUsuario = ${idUsuario} order by idCorrida desc limit 1;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}
module.exports = {
  cadastrar,
  listar,
  buscarAndarAlcancado,
};
