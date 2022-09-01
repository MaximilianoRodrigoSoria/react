import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas de 11-async-await', () => {

    test('getImagen debe de devolver una URL ', async() => {
          const url = await getImagen();
          console.log(url);
          expect(typeof url).toBe('string');   
    });
    
    
});
