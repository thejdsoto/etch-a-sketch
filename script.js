// Pseudo code:
// 1. Create function that will return a color value upon clicking the <button> in "palette"
// 2. Create a function that will invoke <div> elements within canvas (100 x 100 pixels => 7.5p width, 7.5p height for 750x750p canvas)
// 3. Using the color value returned from step 1, change the color of invoked <div> inside <canvas> upon clicking
// 4. Create a function that will run upon clicking "Clear All" button that will make a whole canvas color white
// 5. Create a function that will run upon clicking "Eraser" button that will change the color of a <div> inside <canvas> white upon clicking

let colors;

function createGrid () {
    const canvas = document.querySelector('.canvas');
        for (let i = 0; i < 16 * 16; i++) {
            const div = document.createElement('div');
            canvas.appendChild(div);
            div.classList.add('grid');
            div.setAttribute('style', 'height: 50px; width: 50px; padding: 0; margin: 0;');
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', `height: 50px; width: 50px; padding: 0; margin: 0; background-color: ${colors};`);
            });
        }
}

createGrid();
const btn = document.querySelectorAll('.color');
btn.forEach((buttons) => buttons.addEventListener('click', () => {
    colors = buttons.id;
    })
);
