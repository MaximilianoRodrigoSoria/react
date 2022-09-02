import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';



describe('Pruebas en <CounterAPP/>', () => {  
    const  initialValue = 100;
    
    test('Debe coincidir el Snapshot', () => {
        
        const { container } = render( <CounterApp value={ initialValue } /> );
        expect( container ).toMatchSnapshot();
    });   

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
        render( <CounterApp value={ initialValue } /> );
        expect( screen.getByText(100) ).toBeTruthy();
        // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')

    });

    test('Debe de incrementar con el botón +1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('101') ).toBeTruthy();

    });

    test('Debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy();

    });

    test('Debe de funcionar el botón de reset', () => {
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });
    
});
