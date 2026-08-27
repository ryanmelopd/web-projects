const input = document.getElementById("task");
const botao = document.getElementById("add");
const lista = document.getElementById("list");
const limpar = document.getElementById("clear");

botao.addEventListener("click", function() {
    const tarefa = input.value.trim();

    if (tarefa === "") {
        return;
    }

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const texto = document.createElement("span");
    texto.textContent = tarefa;

    checkbox.addEventListener("change", function() {

        if (checkbox.checked) {
            item.classList.add("concluida");
        } else {
            item.classList.remove("concluida");
        }
    });

    item.appendChild(checkbox);
    item.appendChild(texto);
    lista.appendChild(item);
    input.value = "";
    input.focus();
});

limpar.addEventListener("click", function() {
    lista.innerHTML = "";
});