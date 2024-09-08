function nombreDeLaFuncion() {
    return "hola"
    
}

const funcioFlecha = () => {
    "hola"
}

nombreDeLaFuncion();
funcioFlecha();

//como hiría en react

function ListaDeTareas () {
    return {
        <ul>
            {listado.map(elemento => { <li>elemento.nombre</li> })}
        </ul>
    }
}