import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('Debe retornar un string y un numero', () => {

        const arreglo = retornaArreglo();
        const [texto, numero] = arreglo;

        expect(texto).toBe('ABC');
        
        expect(numero).toBe(123);

        expect(typeof texto).toBe('string');
        
        expect(typeof numero).toBe('number');

        expect(texto).toEqual(expect.any(String));
        
    })
    
    
})
