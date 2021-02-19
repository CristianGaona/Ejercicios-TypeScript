

/*
    ===== Código de TypeScript =====
*/


let habilidades: string[] = ['Bash', 'Counter', 'Healing'];


//habilidades.push('Fire')

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje ={
    nombre: 'Cristian',
    hp: 100 ,
    habilidades:['Bash', 'Counter', 'Healing']

}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);
