let numero = 0;
let contador = document.getElementById("counter-content")
const botao_aumentar = document.getElementById("increase");
const botao_diminuir = document.getElementById("decrease");
const botao_x2 = document.getElementById("multiply-x2");
const botao_redefinir = document.getElementById("redefine");

botao_aumentar.addEventListener("click", function() {
    if (numero > 999999) {
        contador.textContent = numero;
        alert("Número máximo atingido.");
    } else {
        numero++;
        contador.textContent = numero;
    }
});

botao_diminuir.addEventListener("click", function() {
    if (numero < -999999) {
        contador.textContent = numero;
        alert("Número mínimo atingido.");
    } else {
        numero--;
        contador.textContent = numero;
    }
});

botao_x2.addEventListener("click", function() {
    if (numero > 999999) {
        contador.textContent = numero;
        alert("Número máximo atingido.");
    } else if (numero < -999999) {
        contador.textContent = numero;
        alert("Número mínimo atingido.");
    } else {
        numero = numero * 2;
        contador.textContent = numero;
    }
});

botao_redefinir.addEventListener("click", function() {
    numero = 0;
    contador.textContent = numero;
});