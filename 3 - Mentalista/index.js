var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var numero = parseInt(document.getElementById("valor").value);
  
  console.log(numero);

  if (numero == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (numero < 0 || numero > 10) {
    elementoResultado.innerHTML = "O número está fora do intervalo de 0 a 10!";
    console.log("O número digitado está fora do intervalo de 0 a 10!");
  } else {
    elementoResultado.innerHTML =
      "Você errou! O número secreto era " + numeroSecreto + "!";
  }
}
