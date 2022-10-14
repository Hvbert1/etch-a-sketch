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

var cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        console.log('e');
    });
});