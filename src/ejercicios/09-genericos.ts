

/*
    ===== Código de TypeScript =====
*/
// En TypeScript nomes muy común crear propiedades a las clases

// Permite crear genericos
function queTioSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTioSoy('Hola Mundo')
let soyNumero = queTioSoy(100);
let soyArreglo = queTioSoy([1, 2 , 3, 4])

let soyExplicito = queTioSoy<number>(100);

