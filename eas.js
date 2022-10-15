const container = document.querySelector('#container');
var j = 16;

function grid(j) {
    for(let i = 0; i < j; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let k = 0; k < j; k++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

function change() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = '#6CBFD4';
    });
});
}

function btn() {
    let size = window.prompt("Enter grid number");
    if(size <= 100 && size > 0) {
        j = size;
        reset();
    }
    else alert("size > 0 and < 100");
}

function reset() {
    container.innerHTML = '';
    grid(j);
    change();
}

function btnrgb() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        var randomColour = Math.floor(Math.random()*16777215).toString(16);
        cell.style.backgroundColor = '#' + randomColour;
    });
});
}

grid(j);
change();
