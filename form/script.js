/* Capturar los nodos necesarios para comentar */
const boton = document.querySelector(".boton")// document es todo el html
const input = document.querySelector(".input")
const comentarios = document.querySelector(".Comentarios")



/* Crear una funcion q se ejecute cuando le haga click al boton */

console.log("input",input)
function comentar() {
    comentarios.innerHTML += `<p> ${input.value}</p>`
}

/* Capturar el valor del imput */
