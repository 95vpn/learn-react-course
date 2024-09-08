const nombre = " pokjik";
const edad = 98;
const twiter = 'https://twiter.com'

const persona = {
    nombre,
    edad,
    twiter
}

console.log(persona)

//como hiría en react

function Component({initialState, totalCount}) {
    const [state, setState] = useState({initialState, totalCount})
}