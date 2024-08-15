
//Act. 1 

let numeros = []

for (let index = 0; index < 5; index++) {
    numeros.push(prompt('Ingrese un puntaje'))
}

//Act. 2

let Mayor = 20
for (let index = 0; index < 5; index++) {
    if(numeros[index]> Mayor){
        console.log(numeros[index] * 2)
    }
}


//Act. 3

for (let index = 0; index < 5; index++) {
    if(numeros[index] % 2 == 0){
        console.log(numeros[index])
    } else {
        console.log(numeros[index] * 3)
    }
}

//Act. 4

console.log (numeros)
