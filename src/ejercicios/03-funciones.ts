

/*
    ===== Código de TypeScript =====
*/

// Función normal
function sumar(a:number, b:number): number{
    return (a + b);
}

//Función Flecha
const sumaFlecha=(a: number, b:number): number=>{
    return a + b;
}

//Función con parametros opcionales
function multiplicar(numero:number, otorNumero?:number, base=2):number{
    return numero * base;
}

//(5,0,10)
const resultado = multiplicar(5, 10);
console.log(resultado);


interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHp:()=>void; // Definir fucniones dentro de la interface
}

function curar( personaje: PersonajeLOR, curarX:number): void{
    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeLOR={
    nombre: 'Cristian',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv)
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp()