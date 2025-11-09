var danoAtaque = 28;
var vidaMaxima = 100;
var vidaAtual = 100;
var vidaMaximaInimigo = 100;
var vidaInimigo = 100;
var danoInimigo = 12;
var andarAtual = 1;
var efeitoAtaquePrincipal = false
var efeitoAtaqueSecundario = false


var chanceCrtica = 10
var danoCritico = 1.4



function atualizarAndar() {
  andarAtual++;
  p_andarAtual.innerHTML = andarAtual;
}

function atacar() {

  vidaInimigo -= danoAtaque;
  p_vidaInimigo.innerHTML = vidaInimigo;
  if (vidaInimigo <= 0) {
    selecionarPorta();
    randomizarPerkPortas();
    atualizarAndar();
  } else {
    ataqueInimigo();
  }
}

function sair() {
  atualizarDificuldade();
  atualizar();
  div_telaBatalha.style.display = "flex ";
  vidaInimigo = vidaMaximaInimigo;
  p_vidaInimigo.innerHTML = vidaInimigo;
  p_danoInimigo.innerHTML = danoInimigo;
  div_portas.style.display = "none";
  div_tudoBoon.style.display = "none";
  p_vidaPlayer.innerHTML = `${vidaAtual}/${vidaMaxima}`;
}

function ataqueInimigo() {
  var chanceAtaqueInimigo = Math.floor(Math.random() * 100 + 1); // de 1 a X e math flor para arrendondar para baixo (se for 1.1 vai ser = a 1)
  if (chanceAtaqueInimigo <= 75) {
    vidaAtual -= danoInimigo;
  }
  p_vidaPlayer.innerHTML = `${vidaAtual}/${vidaMaxima}`;
}
var numPortas = 0;
function selecionarPorta() {
  div_telaBatalha.style.display = "none";
  div_portas.style.display = "flex";
  numPortas = Math.floor(Math.random() * 3 + 1);
  if (numPortas == 1) {
    button_porta1.style.display = "flex";
    button_porta2.style.display = "none";
    button_porta3.style.display = "none";
  } else if (numPortas == 2) {
    button_porta1.style.display = "flex";
    button_porta2.style.display = "flex";
    button_porta3.style.display = "none";
  } else {
    if (numPortas == 3) {
      button_porta1.style.display = "flex";
      button_porta2.style.display = "flex";
      button_porta3.style.display = "flex";
    }
  }
}

function randomizarPerkPortas() {
  var listaPerks = [
    [
      "assets/images/centaurhearth.png",
      "Coração de centauro",
      perk_coracaoCenatauro,
    ],
    ["assets/images/Ares_symbol.png", "Benção de Ares", perk_aresBoons],
    ["assets/images/Zeus_symbol.png", "Benção de Zeus"],
    ["assets/images/Poseidon_symbol.png", "Benção de Poseidon"],
    ["assets/images/fonte_cura.png", "Fonte de cura", perk_fonteCura],
  ];

  // a lista dos perks vai ser [img,nome,descricao]

  for (var i = 1; i <= numPortas; i++) {
    var tamanholistaPerks = listaPerks.length;

    var img_portaid = document.getElementById(`img_porta${i}`);
    var p_portaid = document.getElementById(`p_porta${i}`);
    var button_portaid = document.getElementById(`button_porta${i}`);

    var numListaAleatorio = Math.floor(Math.random() * tamanholistaPerks); //gerar numero de 0 a tamanho da lista -1 pq começa do 0
    img_portaid.src = listaPerks[numListaAleatorio][0];
    p_portaid.textContent = listaPerks[numListaAleatorio][1];
    button_portaid.onclick = listaPerks[numListaAleatorio][2];
    listaPerks.splice(numListaAleatorio, 1);
  }
}

function telaSelecionarBoons() {
  div_portas.style.display = "none";
  div_telaBatalha.style.display = "none";
  div_tudoBoon.style.display = "flex";
}

function perk_coracaoCenatauro() {
  vidaMaxima += 25;
  vidaAtual += 25;
  sair();
}

function perk_fonteCura() {
  vidaAtual = vidaMaxima;
  sair();
}
function perk_zeusBoons(){
  telaSelecionarBoons()
  

}

function perk_aresBoons() {
  telaSelecionarBoons();
  button_boon1.onclick = aresBoon1;
  p_textoBoon1.innerHTML = `Sacrifique 10 pontos de vida máxima para ganhar mais 10% de dano.`;
  button_boon2.onclick = aresBoon2;
  p_textoBoon2.innerHTML = `Aumente o seu dano em 5.`;
  button_boon3.onclick = aresBoon3;
  p_textoBoon3.innerHTML = `Ganhe mais 5 pontos de vida máxima e perca 5 de dano.`;
}

function aresBoon1() {
  vidaMaxima -= 10;
  if (vidaAtual > vidaMaxima) {
    vidaAtual -= 10;
  }
  danoAtaque += danoAtaque * 0.1;
  sair();
}

function aresBoon2() {
  danoAtaque += 5;
  sair();
}
function aresBoon3() {
  danoAtaque -= 5;
  vidaMaxima += 5;
  sair();
}

function atualizar() {
  p_vidaPlayer.innerHTML = `${vidaAtual}/${vidaMaxima}`;
  p_vidaInimigo.innerHTML = `${vidaInimigo}`;
  p_danoAtaque.innerHTML = danoAtaque;
}

function atualizarDificuldade() {
  vidaMaximaInimigo += vidaMaximaInimigo * 0.1;
  danoInimigo += danoInimigo * 0.07;
}
