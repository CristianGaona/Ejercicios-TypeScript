

/*
    ===== Código de TypeScript =====
*/
// En TypeScript nomes muy común crear propiedades a las clases

class PersonaNormal{
   
    constructor(
        public nombre:string,
        public direccion:string
        ){}
}
class Heroe extends PersonaNormal{
 

    constructor(public alterEgo: string,
        public edad: number,
        public nombreReal?: string,
        
    ) {
        super(nombreReal, 'NY' );
    }
}

const iroman = new Heroe('Iroman', 50, 'Tonny');
console.log(iroman)