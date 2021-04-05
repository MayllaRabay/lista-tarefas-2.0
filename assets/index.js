const form = document.querySelector("form");
const input = document.querySelector("#input-tarefa");
const aFazer = document.querySelector("#a-fazer");
const feitas = document.querySelector("#feitas");

function marcarComoFeita(event) {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");

    if(checkbox.checked) {
        feitas.append(tarefa);
    } else {
        aFazer.append(tarefa);
    };
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

    tarefa.append(checkbox);
    tarefa.append(span);
    tarefa.append(deleteButton);

    aFazer.append(tarefa);

    input.value = "";
})