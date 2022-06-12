//Promesas
import {getHeroeById} from './bases/008-imports-exports';

/*
const promesa = new Promise((resolve, reject) =>{
    setTimeout(()=> 
        { 
        const heroe = getHeroeById(2);
        if(heroe === undefined) { reject('No se pudo encontrar el heroe')};  
        resolve(heroe);
         
            
    }
        
    ,2000);

});


promesa.then(
  (heroe)=>{
    console.table(heroe);
  }

).catch(
    err => console.warn(err));
*/

const getHeroeByIdAsync = (id) =>{ 
    return  new Promise((resolve, reject) =>{
    setTimeout(()=> 
        { 
        const heroe = getHeroeById(id);
        if(!heroe) { reject('No se pudo encontrar el heroe')};  
        resolve(heroe);      
    }  
    ,2000);

})};

const numberHeroe = 3;
getHeroeByIdAsync(numberHeroe)
    .then(console.table)
    .catch(console.warn)
    .finally(console.log('Se ejecuto el finnaly'));