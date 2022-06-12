
const nombre = 'Maximiliano';

const apellido = 'Soria';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombreCompleto){
    return `Hola ${nombreCompleto}`;

}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto)}!!!`);