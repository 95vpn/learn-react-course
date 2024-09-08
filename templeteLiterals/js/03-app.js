const cuadrado = {
    x: 10,
    y: 10,
}

function calcularAre(cuadrado) {
    const {x, y} = cuadrado
    return x * y
}

console.log(calcularAre(cuadrado));

//como hiria en react

function Avatar({username, url}) {
    return <img src={url} alt={username}/>
}