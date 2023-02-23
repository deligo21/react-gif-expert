import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en GifExpertApp', () => {

    const inputValue = 'Don Ramon';

    test('debe agregar una nueva categoria', () => {

        render(<GifExpertApp/>)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);
    });

    test('no debe agregar una nueva categoria', () => {

        render(<GifExpertApp/>)
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);
    });
});