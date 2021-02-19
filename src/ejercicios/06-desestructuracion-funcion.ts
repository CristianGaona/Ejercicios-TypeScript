

/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string;
    precio : number
}

const telefono: Producto={
    desc:'Nokia N1',
    precio:150
}

const tableta: Producto={
    desc:'Ipad Air',
    precio:350
}


export function calculaISV( productos: Producto[]):[number, number]{
    let total = 0;
    
    // Aplicando desectruturación en argumentos
    productos.forEach( ({ precio})=>{
        total += precio;

    })

    return [total, total * 0.15];
}

const articulos=[telefono, tableta];

// Desestructurar arreglo
const [total, isv]= calculaISV(articulos)

console.log('Total', total);
console.log('ISV', isv);