const form = document.querySelector("form");
const input = document.querySelector("#input-tarefa");
const listaAFazer = document.querySelector("#a-fazer");
const listaFeitas = document.querySelector("#feitas");
const contador = document.querySelector("#contador");
const botaoTodas = document.querySelector("#botao-todas");
const botaoAFazer = document.querySelector("#botao-a-fazer");
const botaoFeitas = document.querySelector("#botao-feitas");

function atualizarContador() {
    const contagem = listaAFazer.querySelectorAll("li").length;

    if(contagem === 1) {
        contador.innerText = "1 item a fazer";
    } else {
        contador.innerText = `${contagem} itens a fazer`;
    };
}

function marcarComoFeita(event) {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");

    if(checkbox.checked) {
        listaFeitas.append(tarefa);
    } else {
        listaAFazer.append(tarefa);
    };

    atualizarContador();
}

function deletarTarefa(event) {
    const deleteButton = event.target;
    const tarefa = deleteButton.closest("li");

    tarefa.remove();

    atualizarContador();
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", marcarComoFeita);

    const span = document.createElement("span");
    span.innerText = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Deletar";
    deleteButton.addEventListener("click", deletarTarefa);

    tarefa.append(checkbox);
    tarefa.append(span);
    tarefa.append(deleteButton);

    listaAFazer.append(tarefa);

    input.value = "";
    
    atualizarContador();
})

botaoTodas.addEventListener("click", () => {
    listaAFazer.removeAttribute("hidden");
    listaFeitas.removeAttribute("hidden");

    botaoAFazer.classList.remove("ativo");
    botaoFeitas.classList.remove("ativo");
    botaoTodas.classList.add("ativo");
})

botaoAFazer.addEventListener("click", () => {
    listaAFazer.removeAttribute("hidden");
    listaFeitas.setAttribute("hidden", "");

    botaoAFazer.classList.add("ativo");
    botaoFeitas.classList.remove("ativo");
    botaoTodas.classList.remove("ativo");
})

botaoFeitas.addEventListener("click", () => {
    listaAFazer.setAttribute("hidden", "");
    listaFeitas.removeAttribute("hidden");

    botaoAFazer.classList.remove("ativo");
    botaoFeitas.classList.add("ativo");
    botaoTodas.classList.remove("ativo");
})