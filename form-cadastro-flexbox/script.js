const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Login realizado!");
        setTimeout(function() {
        window.location.href = "pagina-redirecionada.html"; }, 2000);
    }
});