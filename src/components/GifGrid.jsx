import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>) //Solo se muestra si las imagenes se estan cargando
            }
             
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key = {image.id}
                            {...image} //Esparciendo todas las propiedades del image al componente
                        />
                    ))
                }
            </div>
        </>
    )
}
