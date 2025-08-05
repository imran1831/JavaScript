function add() {
    let input1 = document.getElementById("inputId");
    let listContainer = document.getElementById("list-container");
    let bgContainer = document.getElementById("container");
    if (input1.value === "") {
        alert("Enter Valid Item");
        return;
    }
    
        let liEl = document.createElement("li");
        liEl.classList.add("liel");
        ulEl.appendChild(liEl);
        let checkEl = document.createElement("input");
        checkEl.type = "checkbox";
        checkEl.id = "checkpoint";
        checkEl.classList.add("checkel");
        liEl.appendChild(checkEl);
        let labCon = document.createElement("div");
        labCon.classList.add("labcon");
        liEl.appendChild(labCon);
        let labEl = document.createElement("label");
        labEl.textContent = input1.value;
        labEl.setAttribute("for", "checkpoint");
        labCon.appendChild(labEl);
        let deleteContainer = document.createElement("div");
        deleteContainer.classList.add("delete");
        labCon.appendChild(deleteContainer);
        let deleteIcon = document.createElement("i")
        deleteIcon.classList.add("far", "fa-trash-alt");
        deleteContainer.appendChild(deleteIcon);
        deleteIcon.onclick = function () {
            ulEl.removeChild(liEl);
        };
    todoList=liEl;
    input1.value = "";
}