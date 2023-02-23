import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {

    test('debe regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('Don Ramon'));
        const { images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y isLoading es falso', async() => {

        const { result } = renderHook( () => useFetchGifs('Don Ramon'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            
        );
        
        const { images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});