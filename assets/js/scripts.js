console.log("Desafio Funciones");

function pintar(ele, color = 'green'){
    ele.style.backgroundColor = color;
}

ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele, 'yellow'));