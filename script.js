const container = document.querySelector('.container');

for (let i=0; i<16; i++) {
    let column = document.createElement('div');
    column.setAttribute("class", "column");
    // row.style.width = "50px";
    // row.style.height = "50px";
    // row.style.border = "1px solid black";
    container.appendChild(column);
    for (let j=0; j<16; j++) {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.border = "1px solid black";
        column.appendChild(cell);
    }
}