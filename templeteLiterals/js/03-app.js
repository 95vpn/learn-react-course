const cuadrado = {
    x: 10,
    y: 10,
}

function calcularAre(cuadrado) {
    const {x, y} = cuadrado
    return x * y
}

console.log(calcularAre(cuadrado));