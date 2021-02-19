

/*
    ===== Código de TypeScript =====
*/
// En TypeScript nomes muy común crear propiedades a las clases

interface Pasajero{
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Fernando',
    hijos: [ 'Natalia', 'Grabiel']
}

function imprimeHijos( pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1)