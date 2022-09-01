import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas de 09-promesas ', () => {
    test('getHeroByIdAsync debe retornar un Heroe', (done) => {
        const id = 1;
        const promesa = getHeroeByIdAsync(id)
            .then(heroe=>{
                expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });       
                done();
            });

    });    
    test('getHeroByIdAsync debe retornar un Error', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(heroe => { expect(heroe).toBeFalsy();
            done();})
            .catch(error=>{
                expect(error).toBe( `No se pudo encontrar el héroe ${id}`);       
                done();
            });
            
    }); 
});
