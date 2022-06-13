import { PropTypes } from "prop-types";



const titulo = 'Esto es un titulo';
const parrafo = 'Esto es un parrafo';


const persona = {
    nombre: 'Maximiliano',
    apellido: 'Soria'
};
const FirstAPP = ({titulo, subtitulo}) => {

 console.log(titulo);
 return (
 <>
    <h1> {titulo}</h1>
    <p>{subtitulo}</p>
    <h3>{getPersona()}</h3>
 </>)
};

export default FirstAPP;


const myFunctiontion = () => {
    return 'Titulo desde funcion';
}

const getPersona = () =>{
    return JSON.stringify(persona);
}

FirstAPP.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired
}

FirstAPP.defaultProps ={
    titulo: 'No hay titulo'
}