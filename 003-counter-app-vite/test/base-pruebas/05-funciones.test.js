import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
            };
         const user = getUser();
         
         // 3.
         expect(testUser).toEqual(user);

    });

    test('getUsuarioActivo debe retornar un usuario', ()=>{
          const name = 'Maximiliano';
          const usuario = getUsuarioActivo(name);
        
          expect(usuario).toStrictEqual({uid: 'ABC567', username: `${name}`});       
                   

    });
});
