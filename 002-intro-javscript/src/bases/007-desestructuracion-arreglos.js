//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegetta', 'Trunks'];
const [,,p2] = personajes;
console.log(p2);


const regresaArreglo = () => ['ABC', 123];


const [letras, numeros] = regresaArreglo();
console.log(letras);



const useState = (valor) => {
    return  [valor, ()=>{console.log('Hola mundo')}];}


const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();