function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor) * 5;
  
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  