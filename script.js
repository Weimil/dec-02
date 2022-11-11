function handleDragStart(element) {
    element.dataTransfer.setData("text", this.id);
}

function handleDragEnterLeave(element) {
    if(element.type === "dragenter") {
        this.className = "drag-enter";
    } else {
        this.className = "";
    }
}

function handleOverDrop(element) {
    element.preventDefault();

    if (element.type !== "drop") {
        return;
    }

    let draggedId = element.dataTransfer.getData("text");

    let draggedEl = document.getElementById(draggedId);

    if (draggedEl.parentNode === this) {
        this.className = "";
        return;
    }

    draggedEl.parentNode.removeChild(draggedEl);
    this.appendChild(draggedEl);
    this.className = "";
}

let draggable = document.querySelectorAll('[draggable]')
let targets = document.querySelectorAll('[data-drop-target]');

for(let i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener("dragstart", handleDragStart);
}

for(let i = 0; i < targets.length; i++) {
    targets[i].addEventListener("dragover", handleOverDrop);
    targets[i].addEventListener("drop", handleOverDrop);
    targets[i].addEventListener("dragenter", handleDragEnterLeave);
    targets[i].addEventListener("dragleave", handleDragEnterLeave);
}
