import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => {

    const category = 'Don Ramon';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category= {category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Don Ramon',
                url: 'http://don.ramon.com',
            },
            {
                id: '123',
                title: 'Narcos',
                url: 'http://narcos.com',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category= {category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});