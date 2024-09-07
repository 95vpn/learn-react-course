const array = [1,2,3,4,5];
const otroArray = [6,7,8,9,10];


const nuevoArray = array.concat(otroArray)
console.log(nuevoArray)

const otroNuevoArray = [...array, ...otroArray]
console.log(otroNuevoArray)

const obj1 = {
    a:"a",
    b:"b",
    c:"c"
}

const obj2 = {
    d:"d",
    e:"e"
}


const nuevoObjeto = Object.assign({}, obj1, obj2);
console.log(nuevoObjeto)


const otroNuevoObjeto = {...obj1, ...obj2}
console.log(otroNuevoObjeto)