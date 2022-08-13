import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas de de imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        
        // Espero que sea de tipo objeto
        expect(typeof heroe).toBe('object');

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        ;
    });

    test('getHeroeById debe de retornar un undefined', () => {
        const id = 99999;
        const heroe = getHeroeById(id);
        
        // Espero que sea de tipo objeto
        expect(typeof heroe).toBe('undefined');

        expect(heroe).toEqual(undefined);
        
        expect(heroe).toBeFalsy();
    });
    

    //Tarea
    //Debe de retornar un arreglo con los héroes de DC
    //Length === 3
    //toEqual al arreglo filtado

    // debe de retornar un arreglo con los héroes de Marvel
    // length === 2

    test('Debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);     
        const [batman, superman,flash] = heroes;

        expect(batman).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        expect(superman).toEqual({ id: 3, name: 'Superman', owner: 'DC' });
        expect(flash).toEqual({ id: 4, name: 'Flash', owner: 'DC' });
        expect(heroes.length).toBe(3);
    });

    test('Debe de retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);     
        const [spiderman, wolverine] = heroes;
        expect(spiderman).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });
        expect(wolverine).toEqual({ id: 5, name: 'Wolverine', owner: 'Marvel' });
        expect(heroes.length).toBe(2);
    });
})
