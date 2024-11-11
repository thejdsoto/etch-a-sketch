const container = document.querySelector('.container');
const btn = document.querySelector('button');
let dimension;

btn.addEventListener("click", () => {
    dimension = prompt("Please enter value for number of squares (max. 100)");

    if (dimension != null && dimension <= 100) {
        for (let i=0; i<dimension; i++) {
            let column = document.createElement('div');
            column.setAttribute("class", "column");
            container.appendChild(column);
            for (let j=0; j<dimension; j++) {
                let cell = document.createElement('div');
                cell.setAttribute("class", "cell");
                cell.style.width = `${960/dimension}px`;
                cell.style.height = `${960/dimension}px`;
                cell.style.border = "1px solid black";
                column.appendChild(cell);
            }
        } 
    
        const cell = document.querySelectorAll('.cell');

        for (let i=0; i<cell.length; i++) {
            cell[i].addEventListener("mouseover", () => {cell[i].style.backgroundColor = "black"});
        }
    }
});

