//Funciones
/*
const saludar = function saludar(nombre){
    return `Hola ${nombre}`;

}
*/

const saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar('Vegetta'));


const getUser = () =>({uid: 'ACV123',
                      user: 'Pepe'});

console.table(getUser());


const  getUserActive = (nombre) =>({uid: 'A32423', user: 'Canal'});
let usuarioActivo = getUserActive();
console.table(usuarioActivo);