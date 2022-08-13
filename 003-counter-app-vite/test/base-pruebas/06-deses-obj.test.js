import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas de 06-deses-obj', () => {
    
    test('Verificar objeto', () => {
    const advenger={
        clave:'ADV',
        nombre: 'Roger',
        edad: 30,
        rango: 'Capitán'};     

    const {clave, nombre,edad,rango} =advenger; 
    const context = usContext(advenger);
 
    expect(context).toStrictEqual({
        nombreClave: `${clave}`,
        anios: `${edad}`,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }});
    })});