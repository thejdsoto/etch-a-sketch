const container = document.querySelector('.container');
const btn = document.querySelector('button');
let dimension;
let opacity = 0;

function generateBoxes(dimension) {
    for (let i=0; i<dimension; i++) {
        let column = document.createElement('div');
        column.setAttribute("class", "column");
        container.appendChild(column);
        
        for (let j=0; j<dimension; j++) {
            let cell = document.createElement('div');
            cell.setAttribute("class", "cell");
            cell.style.width = `${880/dimension}px`;
            cell.style.height = `${880/dimension}px`;
            cell.style.border = "1px solid gray";
            column.appendChild(cell);
        }
    } 
}

function shadeBoxes() {
    const cell = document.querySelectorAll('.cell');

    //shade boxes
    for (let i=0; i<cell.length; i++) {
        cell[i].addEventListener("mouseover", () => {
            cell[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} / ${opacity}%)`;
            opacity = opacity + 10;
        });
        
    }
}
btn.addEventListener("click", () => {
    dimension = prompt("Please enter value for number of squares (max. 100)");

    if (dimension != null && dimension <= 100 && dimension >= 0) {
        container.textContent = ''; //clears the boxes
        generateBoxes(dimension);
        shadeBoxes();
    } else {
        alert("Try again! Value must be 1 to 100 only");
    }
});

