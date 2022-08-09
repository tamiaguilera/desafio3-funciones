console.log("Prueba")

let colorGlobal = 'yellow';

const div1 = document.getElementById('elemento1');
const div2 = document.getElementById('elemento2');
const div3 = document.getElementById('elemento3');
const div4 = document.getElementById('elemento4');

const cambiarColor = (event) => {
    event.target.style.backgroundColor = colorGlobal;
}

div1.addEventListener('click', (event) => cambiarColor(event))
div2.addEventListener('click', (event) => cambiarColor(event))
div3.addEventListener('click', (event) => cambiarColor(event))
div4.addEventListener('click', (event) => cambiarColor(event))

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorGlobal = 'blue';
    } else if (event.key === 's') {
        colorGlobal = 'grey';
    } else if (event.key === 'd') {
        colorGlobal = 'brown';
    }
})


