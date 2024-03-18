const text = document.getElementById("input");
const list = document.getElementById("list");

const addTask = () => {
    if (text.value === "") {
        alert("Box is empty!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list.appendChild(li);

        let delSpan = document.createElement("span");
        delSpan.innerHTML = "del";
        li.appendChild(delSpan);

        let editSpan = document.createElement("span");
        editSpan.innerHTML = "edit";
        li.appendChild(editSpan);
    }
    text.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        if (e.target.innerHTML === "del") {
            e.target.parentElement.remove();
        } else if (e.target.innerHTML === "edit") {
            text.value = e.target.parentElement.firstChild.nodeValue;
            e.target.parentElement.remove();
        }
    }
}, false);

text.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.keyCode === 13) {
        addTask();
    }
}, true);

