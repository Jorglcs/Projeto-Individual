var database = require("../database/config");

function rankingAndar() {
  var instrucao = `select usuario.nickname as nome,
	andarAlcancado
    from corrida join usuario on fkUsuario = idUsuario
    order by andarAlcancado desc limit 5;`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

function rankingTentativas() {
  var instrucao = `select 
    usuario.nickname as nome, 
    count(andarAlcancado) as quantidadeTentativa 
from corrida 
join usuario on fkUsuario = idUsuario 
group by nickname 
order by quantidadeTentativa desc;
`;
  console.log("Executando a instrução SQL: " + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  rankingAndar,
  rankingTentativas,
};
