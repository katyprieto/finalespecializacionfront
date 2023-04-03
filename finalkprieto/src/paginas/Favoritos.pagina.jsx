import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useEffect, useState } from 'react';
import { useAppSelector,useAppDispatch} from '../componentes/redux/hook';
import { actionFavorito } from "../componentes/redux/gallerySlice";



/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const favoritos = useAppSelector((state) => state.gallery.favoritos);
    const [listFavoritos, setListFavoritos] = useState([]);
   

    useEffect(() => {
        if (favoritos.length > 0) {
    const favoritosIds = favoritos.join(',');
    fetch(`https://rickandmortyapi.com/api/character/${favoritosIds}`)
                .then(response => response.json())
                .then(data =>setListFavoritos(data.results || [data]))
     
            }
        }, [favoritos]);

    console.log(listFavoritos);
    console.log(favoritos);

    const onhandleFavoritoClick = (id) => {
        const even = (element)=> element === id
        const even2=(element)=> element !== id
         const existeid = favoritos.some(even);
         const sacarid=favoritos.filter(even2)
              if (existeid===false) {
             dispatch(actionFavorito([...favoritos, id]));
         }
         else{dispatch(actionFavorito(sacarid))}
      };





    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes
              gallery={listFavoritos}
              onhandleFavoritoClick={onhandleFavoritoClick}
              favoritos={favoritos}
        
        
        />
    </div>
}

export default PaginaFavoritos