const titulo = 'Esto es un titulo';
const parrafo = 'Esto es un parrafo';


const persona = {
    nombre: 'Maximiliano',
    apellido: 'Soria'
};
const appPrueba = () => {
 return (
 <>
    <h1> {myFunctiontion()}</h1>
    <p>{parrafo}</p>
    <h3>{getPersona()}</h3>
 </>)
};

export default appPrueba;


const myFunctiontion = () => {
    return 'Titulo desde funcion';
}

const getPersona = () =>{
    return JSON.stringify(persona);
}