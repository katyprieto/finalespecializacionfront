import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useEffect, useState } from 'react';
import { useAppSelector,useAppDispatch} from '../componentes/redux/hook';
import { actionFavorito,actionResetFavorito} from "../componentes/redux/gallerySlice";





/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    //const dispatch = useAppDispatch()
    //const favoritos = useAppSelector((state) => state.gallery.favoritos);
    const [listFavoritos, setListFavoritos] = useState([]);
    const dispatch = useAppDispatch()
    const gallery = useAppSelector(state => state.gallery);
    const favoritos=useAppSelector(state => state.gallery.favoritos)
  
 
    




   useEffect(() => {

    if (favoritos.length > 0) {
        const favoritosIds = favoritos.join(',');
        fetch(`https://rickandmortyapi.com/api/character/${favoritosIds}`)
        .then(response => response.json())
        .then((result:[]) => {
            if(Array.isArray(result)){          
                setListFavoritos(result);
            }
            else{
                setListFavoritos([result])
            }
       
console.log(result,typeof result)

        })
    }



   }, [favoritos])
   
    
  
 
  





   const onhandleFavoritoClick = (id:number) => {
        const even = (element:number)=> element === id
        const even2=(element:number)=> element !== id
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
            <button className="danger"onClick={()=>{
                setListFavoritos([])
                dispatch(actionResetFavorito(favoritos))
            }}>Reset Favoritos</button>
        </div>
        {favoritos.length>0?
        <GrillaPersonajes
        
           gallery={listFavoritos}
           onhandleFavoritoClick={onhandleFavoritoClick}
            favoritos={favoritos}

        
        />: <h1>No hay personajes favoritos</h1>}
    </div>
}

export default PaginaFavoritos