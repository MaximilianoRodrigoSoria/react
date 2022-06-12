//Desestruracion
//Asignacion desestructurante


const persona = {
    nombre: 'Maxi',
    edad: 33,
    clave: 'Roro',
    //rango: 'Arquitecto'
};


const {nombre:primerNombre, edad, clave} = persona; 

console.log(primerNombre);



const userContext = ({nombre, edad, rango = 'developer', clave}) => {

    console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios : edad,
        latlng:{
            lat: 14.45565,
            lng: -21.1545
        }
    }
};

const {nombreClave, anios:edadNueva, latlng:{lat, lng}} = userContext(persona);

console.log(nombreClave, edadNueva, lat, lng);
