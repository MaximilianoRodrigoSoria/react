//Importar
import heroes, {owner} from '../data/heroes';

export const getHeroeById = (id) =>  (heroes.find( heroe => heroe.id === id));

//console.table(getHeroeById(3));

export const getHeroesByOwner = (owner)=>  (heroes.filter( heroe => heroe.owner === owner));

//console.table(getHeroesByOwner('DC'));

//console.log(owner);