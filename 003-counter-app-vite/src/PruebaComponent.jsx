const titulo = 'Esto es un titulo';
const parrafo = 'Esto es un parrafo';


const persona = {
    nombre: 'Maximiliano',
    apellido: 'Soria'
};
const appPrueba = ({titulo, subtitulo}) => {
 console.log(titulo);
 return (
 <>
    <h1> {titulo}</h1>
    <p>{subtitulo}</p>
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