const container = document.querySelector('#container');

var j = 3;

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
grid(j);
change();

function change() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'yellow';
    });
});
}

function btn() {
    let size = window.prompt("Enter grid number");
    j = size;
    container.innerHTML = '';
    grid(j)
    change();
}

