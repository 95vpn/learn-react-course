function suma (a, b){
    if(a === undefined || b === undefined){
        console.log('debes introducir 2 valores')
    } 
    return a + b;
}

console.log(suma(3, 6))

//como hiría en react

function suma (a = 0, b = 0){
    
    return a + b;
}

console.log(suma(3, 6))