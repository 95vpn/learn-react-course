const nombre = 'Carlo'
const apellido ='qwerlko'

console.log(nombre + " " + apellido)
console.log(`${nombre} ${apellido}`)

//como hirá en react

function Componente({backgroundColor}) {
    return (<div className={`bg-color-${backgroundColor}`}>Hola</div>)
}