function click(){
    additem();
}

function handleKeyUp(e){
    if(e.key === "Enter"){
        additem();
    }
}

function additem(){
    const novoItem = document.getElementById("newitem").value;
    const novaHora = document.getElementById("newhora").value;
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const hora = document.createElement("span");
    const removeButton = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.value = novoItem;

    label.textContent = novoItem;
    label.appendChild(checkbox);

    hora.textContent = novaHora;

    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(label);
    listItem.appendChild(hora);
    listItem.appendChild(removeButton);

    const list = document.getElementById("mylist");
    list.appendChild(listItem);
    document.getElementById("newitem").value = "";
    document.getElementById("newhora").value = "";
}

let botao = document.querySelector(".botao");
botao.addEventListener("click", click);

let inputField = document.querySelector("#newitem");
inputField.addEventListener("keyup", handleKeyUp);
