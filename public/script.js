var andarAtual = 1;

var player = {
  vidaMaxima: 100,
  vidaAtual: 100,

  danoAtaqueBasico: 28,
  chanceCritico: 10,
  danoCritico: 1.4,
  chanceAtaqueBasico: 100,

  danoAtaqueEspecial: 60,
  cargaEspecial: 1,
  cargaEspecialMinima: 1,
  cargaEspecialMaxima: 1,
  chanceAtaqueEspecial: 50,

  efeitoAtaquePrincipal: false,
  efeitoAtaqueSecundario: false,
};

var inimigo = {
  vidaMaxima: 100,
  vidaAtual: 100,
  danoAtaque: 12,
  chanceAtaque: 70,
  paralisia: 0,
};

var finalizacao = {
  andarAlcancado: 1,
  inimigos: 0,
  danoTotal: 0,
  danoRecebido: 0,
  qtdAtaqueBasico: 0,
  qtdAtaqueEspecial: 0,
  qtdCritico: 0,
  qtdBencaos: 0,
  qtdAres: 0,
  qtdZeus: 0,
  qtdPoseidon: 0,
  qtdFontes: 0,
  qtdCentauro: 0,
};
function atualizarAndar() {
  andarAtual++;
  finalizacao.andarAlcancado++;
  p_andarAtual.innerHTML = andarAtual;
}

function ataqueBasico() {
  finalizacao.qtdAtaqueBasico++;
  var rouboVida = (player.danoAtaqueBasico * player.danoCritico * 10) / 100;
  var numAleatorioCritico = Math.floor(Math.random() * 100 + 1); //gera numero de 0 a 100
  if (numAleatorioCritico <= player.chanceCritico) {
    finalizacao.danoTotal += player.danoAtaqueBasico * player.danoCritico;
    finalizacao.qtdCritico++;
    inimigo.vidaAtual -= player.danoAtaqueBasico * player.danoCritico;
    p_logPlayer.innerHTML = `Zagreus causou um ataque crítico causando ${(
      player.danoAtaqueBasico * player.danoCritico
    ).toFixed(2)} de dano.`;

    if (player.efeitoAtaquePrincipal == "ares") {
      player.vidaAtual += rouboVida;
      p_logPlayer.innerHTML += `<br>E curou ${rouboVida.toFixed(2)} de vida.`;
    } else if (player.efeitoAtaquePrincipal == "zeus") {
      inimigo.paralisia = 1;
      p_logPlayer.innerHTML += `<br>E causou paralisia ao inimigo.`;
    }
  } else {
    finalizacao.danoTotal += player.danoAtaqueBasico;
    inimigo.vidaAtual -= player.danoAtaqueBasico;
    p_logPlayer.innerHTML = `Zagreus causou ${player.danoAtaqueBasico.toFixed(
      2
    )} de dano.`;
  }

  p_vidaInimigo.innerHTML = `${inimigo.vidaAtual.toFixed(2)}/${
    inimigo.vidaMaxima
  }`;
  if (inimigo.vidaAtual <= 0) {
    finalizacao.inimigos++;
    selecionarPorta();
    randomizarPerkPortas();
    atualizarAndar();
  } else {
    ataqueInimigo();
  }
}

function ataqueEspecial() {
  if (player.cargaEspecial >= player.cargaEspecialMinima) {
    var chanceAtaqueEspecial = Math.floor(Math.random() * 100 + 1);
    player.cargaEspecial -= player.cargaEspecialMinima;
    if (chanceAtaqueEspecial <= player.chanceAtaqueEspecial) {
      finalizacao.danoTotal += player.danoAtaqueEspecial;
      finalizacao.qtdAtaqueEspecial++;
      console.log("ACERTOU ATAQUE ESPECIAL");
      p_logPlayer.innerHTML = `Zagreus acertou o <b>ataque especial.</b>`;
      inimigo.vidaAtual -= player.danoAtaqueEspecial;

      p_vidaInimigo.innerHTML = `${inimigo.vidaAtual}/${inimigo.vidaMaxima}`;
      if (player.efeitoAtaqueSecundario == "zeus") {
        inimigo.paralisia = 2;
      }
    } else {
      p_logPlayer.innerHTML = `Zagreus errou o <b>ataque especial.</b>`;
    }
    if (inimigo.vidaAtual <= 0) {
      finalizacao.inimigos++;
      selecionarPorta();
      randomizarPerkPortas();
      atualizarAndar();
    } else {
      ataqueInimigo();
    }
  } else alert("Cargas nescessarias insuficientes.");
  atualizar();
}
function sair() {
  p_logPlayer.innerHTML = "";
  p_logInimigo.innerHTML = "";
  atualizarDificuldade();
  atualizar();
  div_telaBatalha.style.display = "flex";
  inimigo.vidaAtual = inimigo.vidaMaxima;
  p_vidaInimigo.innerHTML = `${inimigo.vidaAtual}/${inimigo.vidaMaxima}`;
  p_danoInimigo.innerHTML = inimigo.danoAtaque;
  div_portas.style.display = "none";
  div_tudoBoon.style.display = "none";
  p_vidaPlayer.innerHTML = `${player.vidaAtual}/${player.vidaMaxima}`;
}

function ataqueInimigo() {
  var chanceAtaqueInimigo = Math.floor(Math.random() * 100 + 1); // de 1 a X e math flor para arrendondar para baixo (se for 1.1 vai ser = a 1)
  if (inimigo.paralisia <= 0) {
    if (chanceAtaqueInimigo <= inimigo.chanceAtaque) {
      finalizacao.danoRecebido += inimigo.danoAtaque;
      player.vidaAtual -= inimigo.danoAtaque;
      p_logInimigo.innerHTML = `O inimigo causou ${inimigo.danoAtaque.toFixed(
        1
      )}.`;
    } else {
      p_logInimigo.innerHTML = `O inimigo errou o ataque.`;
    }
    p_vidaPlayer.innerHTML = `${player.vidaAtual}/${player.vidaMaxima}`;
  } else {
    p_logInimigo.innerHTML = `<b style="color:yelow">O inimigo esta paralisado por ${inimigo.paralisia} turno(s).</b>`;
    inimigo.paralisia -= 1;
  }
  if (player.vidaAtual <= 0) {
    exibirRelatorio();
  }
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
    ["assets/images/Zeus_symbol.png", "Benção de Zeus", perk_zeusBoons],
    [
      "assets/images/Poseidon_symbol.png",
      "Benção de Poseidon",
      perk_poseidonBoons,
    ],
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
    p_portaid.innerHTML = listaPerks[numListaAleatorio][1];
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
  finalizacao.qtdCentauro++;
  player.vidaMaxima += 25;
  player.vidaAtual += 25;
  sair();
}

function perk_fonteCura() {
  finalizacao.qtdFontes++;
  player.vidaAtual = player.vidaMaxima;
  player.cargaEspecial = player.cargaEspecialMaxima;
  sair();
}

function perk_zeusBoons() {
  finalizacao.qtdZeus++;
  telaSelecionarBoons();
  var zeusBoons = [
    {
      nome: "Ataque basico zeus",
      imagem: `assets/images/ataque-basico-zeus.png`,
      titulo: `Julgamento Eletrico (Ataque Básico).`,
      descricao: `Acertos críticos paralisam o inimigo por 1 turno.`,
      tipo: `Ataque Básico (único).`,
      efeito: function boon1() {
        if (player.efeitoAtaquePrincipal == false) {
          player.efeitoAtaquePrincipal = "zeus";
          img_ataqueBasico.src = "assets/images/ataque-basico-zeus.png";
          sair();
        } else {
          alert("O ataque básico ja possui uma benção selecionada!");
        }
      },
    },
    {
      nome: "ataque especial zeus",
      imagem: `assets/images/ataque-especial-zeus.png`,
      titulo: `Raio Supremo (Ataque Especial)`,
      descricao: `O ataque especial causa -20% de dano, Paralisa o inimigo por 2 turnos, e consome 2 cargas.`,
      tipo: `Ataque Especial (único).`,
      efeito: function boon2() {
        if (player.efeitoAtaqueSecundario == false) {
          player.efeitoAtaqueSecundario = "zeus";
          player.danoAtaqueEspecial *= 0.8;
          img_ataqueEspecial.src = "assets/images/ataque-especial-zeus.png";
          sair();
        } else {
          alert("O ataque especial ja possui uma bençao selecionada!");
        }
      },
    },
    {
      nome: "buff 1 zeus",
      imagem: `assets/images/buff-zeus-1.png`,
      titulo: `Disciplina dos Céus`,
      descricao: `+10% de precisão em ambos ataques, mas -5% de dano em ambos ataques.`,
      tipo: `Buff.`,
      efeito: function boon3() {
        player.danoAtaqueBasico *= 0.95;
        player.danoAtaqueEspecial *= 0.95;
        player.chanceAtaqueBasico *= 1.1;
        player.chanceAtaqueEspecial *= 1.1;
        sair();
      },
    },
    {
      nome: "buff 2 zeus",
      imagem: `assets/images/buff-zeus-2.png`,
      titulo: `Trovão Impetuoso`,
      descricao: `+10% de dano e +5% de chance crítica.`,
      tipo: `Buff.`,
      efeito: function boon4() {
        player.danoAtaqueBasico *= 1.1;
        player.danoAtaqueEspecial *= 1.1;
        player.chanceCritico *= 1.05;
        sair();
      },
    },
    {
      nome: "buff 3 zeus",
      imagem: `assets/images/buff-zeus-3.png`,
      titulo: `Poder Instável`,
      descricao: `+25% de dano, mas -15% de chance de acerto do ataque basico.`,
      tipo: `Buff.`,
      efeito: function boon5() {
        player.danoAtaqueBasico *= 1.25;
        player.chanceAtaqueBasico *= 0.85;
        sair();
      },
    },
    {
      nome: "buff 4 zeus",
      imagem: `assets/images/buff-zeus-4.png`,
      titulo: `Carga de Eletricidade`,
      descricao: `+1 carga de ataque especial (permanente).`,
      tipo: `Buff.`,
      efeito: function boon6() {
        player.cargaEspecial += 1;
        player.cargaEspecialMaxima += 1;
        sair();
      },
    },
  ];
  telaSelecionarBoons();
  for (var i = 1; i <= 3; i++) {
    var tamanhoListaBoon = zeusBoons.length;
    var numBoonAleatorio = Math.floor(Math.random() * tamanhoListaBoon);
    var h2_boonId = document.getElementById(`h2_tituloBoon${i}`);
    var p_textoBoonId = document.getElementById(`p_textoBoon${i}`);
    var p_tipoBoonId = document.getElementById(`p_tipoBoon${i}`);
    var button_boonId = document.getElementById(`button_boon${i}`);
    var img_boonId = document.getElementById(`img_boon${i}`);

    img_boonId.src = `${zeusBoons[numBoonAleatorio].imagem}`;
    h2_boonId.innerHTML = `${zeusBoons[numBoonAleatorio].titulo}`;
    p_textoBoonId.innerHTML = `${zeusBoons[numBoonAleatorio].descricao}`;
    p_tipoBoonId.innerHTML = `${zeusBoons[numBoonAleatorio].tipo}`;
    button_boonId.onclick = zeusBoons[numBoonAleatorio].efeito;
    zeusBoons.splice(numBoonAleatorio, 1);
  }
}

function perk_poseidonBoons() {
  finalizacao.qtdPoseidon++;
  telaSelecionarBoons();
  var poseidonBoons = [
    {
      nome: "Ataque basico poseidon",
      imagem: `assets/images/ataque-basico-poseidon.png`,
      titulo: `Impacto das Marés (Ataque Básico).`,
      descricao: `Acertos críticos causam um adicional de 40% do dano base.`,
      tipo: `Ataque Básico (único).`,
      efeito: function boon1() {
        if (player.efeitoAtaquePrincipal == false) {
          player.efeitoAtaquePrincipal = "poseidon";
          img_ataqueBasico.src = "assets/images/ataque-basico-poseidon.png";
          sair();
        } else {
          alert("O ataque básico ja possui uma benção selecionada!");
        }
      },
    },
    {
      nome: "ataque especial poseidon",
      imagem: `assets/images/ataque-especial-poseidon.png`,
      titulo: `Maremoto (Ataque Especial)`,
      descricao: `o Ataque espeical causa +40% de dano, +10% de chance de erro, e consome 2 cargas`,
      tipo: `Ataque Especial (único).`,
      efeito: function boon2() {
        if (player.efeitoAtaqueSecundario == false) {
          player.efeitoAtaqueSecundario = "poseidon";
          player.danoAtaqueEspecial *= 1.4;
          img_ataqueEspecial.src = "assets/images/ataque-especial-poseidon.png";
          sair();
        } else {
          alert("O ataque especial ja possui uma benção selecionada!");
        }
      },
    },
    {
      nome: "buff 1 poseidon",
      imagem: `assets/images/buff-poseidon-1.png`,
      titulo: `Fôlego das Profundezas`,
      descricao: `+20% de HP máximo.`,
      tipo: `Buff.`,
      efeito: function boon3() {
        player.vidaMaxima *= 1.2;
        player.vidaAtual *= 1.2;
        sair();
      },
    },
    {
      nome: "buff 2 poseidon",
      imagem: `assets/images/buff-poseidon-2.png`,
      titulo: `Correnteza Violenta.`,
      descricao: `+15% de dano.`,
      tipo: `Buff.`,
      efeito: function boon4() {
        player.danoAtaqueBasico *= 1.15;
        player.danoAtaqueEspecial *= 1.15;

        sair();
      },
    },
    {
      nome: "buff 3 poseidon",
      imagem: `assets/images/buff-poseidon-3.png`,
      titulo: `Vigor das Ondas`,
      descricao: `+10% de dano e +10% de precisão.`,
      tipo: `Buff.`,
      efeito: function boon5() {
        player.danoAtaqueBasico *= 1.1;
        player.danoAtaqueEspecial *= 1.1;
        player.chanceAtaqueBasico *= 1.1;
        player.chanceAtaqueEspecial *= 1.1;
        sair();
      },
    },
    {
      nome: "buff 4 poseidon",
      imagem: `assets/images/buff-poseidon-4.png`,
      titulo: `Pressão Oceânica`,
      descricao: `+10% de critico e +10% de chance critica.`,
      tipo: `Buff.`,
      efeito: function boon6() {
        player.chanceCritico += 10;
        player.danoCritico += 10;
        sair();
      },
    },
  ];
  telaSelecionarBoons();
  for (var i = 1; i <= 3; i++) {
    var tamanhoListaBoon = poseidonBoons.length;
    var numBoonAleatorio = Math.floor(Math.random() * tamanhoListaBoon);
    var h2_boonId = document.getElementById(`h2_tituloBoon${i}`);
    var p_textoBoonId = document.getElementById(`p_textoBoon${i}`);
    var p_tipoBoonId = document.getElementById(`p_tipoBoon${i}`);
    var button_boonId = document.getElementById(`button_boon${i}`);
    var img_boonId = document.getElementById(`img_boon${i}`);

    img_boonId.src = `${poseidonBoons[numBoonAleatorio].imagem}`;
    h2_boonId.innerHTML = `${poseidonBoons[numBoonAleatorio].titulo}`;
    p_textoBoonId.innerHTML = `${poseidonBoons[numBoonAleatorio].descricao}`;
    p_tipoBoonId.innerHTML = `${poseidonBoons[numBoonAleatorio].tipo}`;
    button_boonId.onclick = poseidonBoons[numBoonAleatorio].efeito;
    poseidonBoons.splice(numBoonAleatorio, 1);
  }
}
function perk_aresBoons() {
  finalizacao.qtdAres++;
  var aresBoons = [
    {
      nome: "Ataque basico ares",
      imagem: `assets/images/ataque-basico-ares.png`,
      titulo: `Golpe Carmesim (Ataque Básico).`,
      descricao: `Acertos críticos aplicam Roubo de Vida igual a 10% do dano causado.`,
      tipo: `Ataque Básico (único).`,
      efeito: function boon1() {
        if (player.efeitoAtaquePrincipal == false) {
          player.efeitoAtaquePrincipal = "ares";
          img_ataqueBasico.src = "assets/images/ataque-basico-ares.png";

          sair();
        } else {
          alert("O ataque básico ja possui uma benção selecionada!");
        }
      },
    },
    {
      nome: "ataque especial ares",
      imagem: `assets/images/ataque-especial-ares.png`,
      titulo: `Ritual de Sacrifício (Ataque Especial)`,
      descricao: `O ataque especial causa +25% de dano, mas gasta 2 cargas e Zagreus perde 5% da vida atual.`,
      tipo: `Ataque Especial (único).`,
      efeito: function boon2() {
        if (player.efeitoAtaqueSecundario == false) {
          player.efeitoAtaqueSecundario = "ares";
          player.danoAtaqueEspecial *= 1.25;
          img_ataqueEspecial.src = "assets/images/ataque-especial-ares.png";
          sair();
        } else {
          alert("O ataque especial ja possui uma benção selecionada!");
        }
      },
    },
    {
      nome: "buff 1 ares",
      imagem: `assets/images/buff-ares-1.png`,
      titulo: `Fúria do Campo de Batalha`,
      descricao: `+15% de dano, mas -10% de precisão.`,
      tipo: `Buff.`,
      efeito: function boon3() {
        player.danoAtaqueBasico *= 1.15;
        player.danoAtaqueEspecial *= 1.15;
        player.chanceAtaqueBasico *= 0.9;
        player.chanceAtaqueEspecial *= 0.9;
        sair();
      },
    },
    {
      nome: "buff 2 ares",
      imagem: `assets/images/buff-ares-2.png`,
      titulo: `Sangue por Sangue`,
      descricao: `+10% de dano, sem penalidade.`,
      tipo: `Buff.`,
      efeito: function boon4() {
        player.danoAtaqueBasico *= 1.1;
        player.danoAtaqueEspecial *= 1.1;
        sair();
      },
    },
    {
      nome: "buff 3 ares",
      imagem: `assets/images/buff-ares-3.png`,
      titulo: `Golpe Brutal`,
      descricao: `+10% de chance de crítico, mas -10% de dano de ataque básico.`,
      tipo: `Buff.`,
      efeito: function boon5() {
        player.danoAtaqueBasico *= 0.9;
        player.chanceCritico += 10;
        sair();
      },
    },
    {
      nome: "buff 4 ares",
      imagem: `assets/images/buff-ares-4.png`,
      titulo: `Domínio do Guerreiro`,
      descricao: `+5 de chance de crítico, +5 de dano de ataque básico.`,
      tipo: `Buff.`,
      efeito: function boon6() {
        player.danoAtaqueBasico += 5;
        player.chanceCritico += 5;
        sair();
      },
    },
  ];
  telaSelecionarBoons();
  for (var i = 1; i <= 3; i++) {
    var tamanhoListaBoon = aresBoons.length;
    var numBoonAleatorio = Math.floor(Math.random() * tamanhoListaBoon);
    var h2_boonId = document.getElementById(`h2_tituloBoon${i}`);
    var p_textoBoonId = document.getElementById(`p_textoBoon${i}`);
    var p_tipoBoonId = document.getElementById(`p_tipoBoon${i}`);
    var button_boonId = document.getElementById(`button_boon${i}`);
    var img_boonId = document.getElementById(`img_boon${i}`);

    img_boonId.src = `${aresBoons[numBoonAleatorio].imagem}`;
    h2_boonId.innerHTML = `${aresBoons[numBoonAleatorio].titulo}`;
    p_textoBoonId.innerHTML = `${aresBoons[numBoonAleatorio].descricao}`;
    p_tipoBoonId.innerHTML = `${aresBoons[numBoonAleatorio].tipo}`;
    button_boonId.onclick = aresBoons[numBoonAleatorio].efeito;
    aresBoons.splice(numBoonAleatorio, 1);
  }
}

function atualizar() {
  p_vidaPlayer.innerHTML = `${player.vidaAtual}/${player.vidaMaxima}`;
  p_danoAtaque.innerHTML = `Dano: ${player.danoAtaqueBasico}`;
  p_chanceCritico.innerHTML = `Chance Crítica: ${player.chanceCritico}%`;
  p_andarAtual.innerHTML = andarAtual;
  p_chanceAcerto.innerHTML = `Chance de acerto: ${player.chanceAtaqueBasico}`;
  p_vidaInimigo.innerHTML = `${inimigo.vidaAtual}/${inimigo.vidaMaxima}`;
  p_danoInimigo.innerHTML = `Dano: ${inimigo.danoAtaque}`;
  p_cargasEspecial.innerHTML = `Cargas de especial: ${player.cargaEspecial}/${player.cargaEspecialMaxima}`;
  p_danoAtaqueEspecial.innerHTML = `Dano: ${player.danoAtaqueEspecial}`;
  p_efeitoAtaqueBasico.innerHTML = `Efeito: ${player.efeitoAtaquePrincipal}`;
}

function atualizarDificuldade() {
  inimigo.vidaMaxima += inimigo.vidaMaxima * 0.1;
  inimigo.danoAtaque += inimigo.danoAtaque * 0.07;
}

function exibirRelatorio() {
  finalizacao.qtdBencaos =
    Number(finalizacao.qtdZeus) +
    Number(finalizacao.qtdAres) +
    Number(finalizacao.qtdPoseidon);
  div_finalizacao.style.display = "flex";
  div_telaBatalha.style.display = "none";
  p_finalizacaoAndar.innerHTML = `${finalizacao.andarAlcancado}`;
  p_finalizacaoInimigos.innerHTML = `${finalizacao.inimigos}`;
  p_finalizacaoDanoTotal.innerHTML = `${finalizacao.danoTotal.toFixed(2)}`;
  p_finalizacaoDanoRecebido.innerHTML = `${finalizacao.danoRecebido.toFixed(
    2
  )}`;
  p_finalizacaoQtdAtaqueBasico.innerHTML = `${finalizacao.qtdAtaqueBasico}`;
  p_finalizacaoQtdAtaqueEspecial.innerHTML = `${finalizacao.qtdAtaqueEspecial}`;
  p_finalizacaoQtdCritico.innerHTML = `${finalizacao.qtdCritico}`;
  p_finalizacaoQtdBencaos.innerHTML = `${finalizacao.qtdBencaos}`;
  p_finalizacaoQtdZeus.innerHTML = `${finalizacao.qtdZeus}`;
  p_finalizacaoQtdAres.innerHTML = `${finalizacao.qtdAres}`;
  p_finalizacaoQtdPoseidon.innerHTML = `${finalizacao.qtdPoseidon}`;
  p_finalizacaoQtdFontes.innerHTML = `${finalizacao.qtdFontes}`;
  p_finalizacaoQtdCentauro.innerHTML = `${finalizacao.qtdCentauro}`;
}
