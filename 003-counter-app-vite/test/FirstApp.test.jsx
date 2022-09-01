import { getByText, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {
    
    test('debe de hacer match con el snapshot', () => {
        
    const title = 'Esto es un titulo';
    const name = 'Maximiliano';
    
        const { container, getByText } = render( <FirstApp title={ title } name={ name }/> );

        expect( container ).toMatchSnapshot();
        expect( getByText(name)).toBeTruthy();
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

     });

   

});