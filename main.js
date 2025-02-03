let btn = document.querySelector('button');
let notesDiv = document.querySelector('.notes_container');
let notes = document.querySelectorAll('.input_text');

function showNotes() {
    notesDiv.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesDiv.innerHTML);
}

btn.onclick = function() {
    let inputBox = document.createElement('p');
    let icon = document.createElement('i');
    let container = document.createElement('div');
    inputBox.className = 'input_text';
    inputBox.setAttribute('contenteditable', 'true');
    icon.className = 'bx bx-trash';
    container.appendChild(inputBox);
    container.appendChild(icon);
    notesDiv.appendChild(container);
}

notesDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.input_text');
        notes.forEach(e => {
            e.onkeyup = function() {
                updateStorage();
            }
        })
    }
});

document.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        document.execCommand("InsertLineBreak");
        e.preventDefault();
    }
});