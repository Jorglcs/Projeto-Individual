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
  qtdCritico
) {
  var instrucao = `
        INSERT INTO corrida (fkUsuario,andarAlcancado,danoTotalCausado,danoTotalRecebido,inimigosDerrotados,totalAtaquesBasicos,totalAtaquesEspeciais,totalAtaquesCriticos) VALUES ('${fkUsuario}','${andarAlcancado}','${danoTotal}','${danoRecebido}','${inimigos}','${qtdAtaqueBasico}','${qtdAtaqueEspecial}','${qtdCritico}');
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
module.exports = {
  cadastrar,
  listar,
};
