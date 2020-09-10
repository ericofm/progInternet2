function mostrarAlerta(){
    alert("Passou por cima do botão");
}

function calcular(){
    var textValor = document.getElementById("textValor");
    var resultado = Number.parseFloat(textValor.value * 2);
    document.getElementById("labelResultado").innerHTML = resultado
    
}