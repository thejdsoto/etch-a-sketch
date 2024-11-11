const container = document.querySelector('.container');

for (let i=0; i<16; i++) {
    let column = document.createElement('div');
    column.setAttribute("class", "column");
    container.appendChild(column);
    for (let j=0; j<16; j++) {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.style.width = `${960/dimension}`;
        cell.style.height = `${960/dimension}`;
        cell.style.border = "1px solid black";
        column.appendChild(cell);
    }
}

const cell = document.querySelectorAll('.cell');

for (let i=0; i<cell.length; i++) {
    cell[i].addEventListener("mouseover", () => {cell[i].style.backgroundColor = "black"});
}