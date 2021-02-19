

/*
    ===== Código de TypeScript =====
*/
// En TypeScript nomes muy común crear propiedades a las clases



function classDecorator<T extends { new (...args:any[]):{}}>(
    constructor: T

){
    return class extends constructor{
        newProperty = "new property";
        hello = "override";
    };
}


@classDecorator
class MiSuperClase{
    public miPropiedad: string = 'Hola';
    imprimir(){
        console.log('Hola Mudo');
    }
}

console.log(MiSuperClase)

const miClase = new MiSuperClase();
console.log(miClase.miPropiedad);