var cartas = [
  // Bulbassauro
  {
    nome: "Bulbassauro",
    imagem: "https://static.wikia.nocookie.net/pocketmonster/images/a/ab/Bulbassauro.png/revision/latest?cb=20160908232122&path-prefix=pt-br",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  },
  // Darth Vader
  {
    nome: "Darth Vader",
    imagem: "https://i0.wp.com/sociedadejedi.com.br/wp-content/uploads/2020/01/darth-vader-.jpg?fit=700%2C394&ssl=1",
    atributos: {
      ataque: 9,
      defedesa: 8,
      magia: 2
    }
  },
  // Shiryu do Dragão
  {
    nome: "Shiryu de Dragão",
    imagem: "https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest/top-crop/width/360/height/450?cb=20151229134313&path-prefix=pt",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  }
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  var numeroCartaJogador = parseInt(Math.random() * 3);

  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaMaquina = cartas[numeroCartaMaquina];
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  console.log(cartaJogador);
  exibirOpcoes();
  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Vitória!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Derrota!";
  } else {
    elementoResultado.innerHTML = "Empate!";
  }
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}