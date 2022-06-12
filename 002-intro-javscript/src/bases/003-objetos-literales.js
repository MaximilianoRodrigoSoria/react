const persona = {
    nombre: 'Maximiliano',
    segundoNombre: 'Rodrigo',
    apellido: 'Soria',
    edad: 33,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

console.table(persona);

//Spread
const  persona2 = {...persona};
persona2.nombre = 'Peter';


console.table(persona2);