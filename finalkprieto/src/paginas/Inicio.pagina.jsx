import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useContext} from "react";
import { NumContext } from "../componentes/context/numcontext";
import { useEffect} from 'react'
import { actionFavorito, getPag, getPhotos } from '../componentes/redux/gallerySlice'
import { useAppDispatch, useAppSelector } from '../componentes/redux/hook'


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  
  
//logica
const dispatch = useAppDispatch()
const gallery = useAppSelector(state => state.gallery);
const favoritos=useAppSelector(state => state.gallery.favoritos)
console.log(gallery.favoritos)

useEffect(() => {
  dispatch(getPhotos(""))
 
 }, [""])

 
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


console.log(onhandleFavoritoClick)




   
   
   const {setBottonReset}= useContext(NumContext)
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=>{setBottonReset(true)}}>Reset</button>
        </div>
        <Filtros />
        <Paginacion/>
        <GrillaPersonajes
      gallery={gallery}
      onhandleFavoritoClick={onhandleFavoritoClick}
      favoritos={favoritos}
        />
        <Paginacion />
    </div>
}

export default PaginaInicio