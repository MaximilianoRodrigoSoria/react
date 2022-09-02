import { getByText, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {
    
    // test('debe de hacer match con el snapshot', () => {
        
    // const title = 'Esto es un titulo';
    // const name = 'Maximiliano';
    
    //     const { container, getByText } = render( <FirstApp title={ title } name={ name }/> );

    //     expect( container ).toMatchSnapshot();


    //  });

     test('debe mostrar el titulo en el h1', () => {
        
        const title = 'Esto es un titulo';
        const name = 'Maximiliano';      
            const { container, getByText, getByTestId } = render( <FirstApp title={ title } name={ name }/> );   
            expect( getByText(name)).toBeTruthy();
            const h1 = container.querySelector('h1');
            expect(h1.innerHTML).toContain(title);

            expect(getByTestId('test-title').innerHTML).toContain(title);

         });

         test('debe mostrar el subtitulo mostrado por props', () => {
        
            const title = 'Esto es un titulo';
            const subTitle = 'Maximiliano';      
                // const { getByText} = render( <FirstApp title={ title } subTitle={ subTitle }/> );   
                // expect( getByText(title)).toBeTruthy();
     
                const { getAllByText} = render( <FirstApp title={ title } subTitle={ subTitle }/> );   
                expect( getAllByText(subTitle).length).toBe(2);
     
    
    
             });  

});