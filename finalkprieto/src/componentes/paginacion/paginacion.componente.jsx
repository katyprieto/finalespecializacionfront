import './paginacion.css';

import { NumContext } from "../context/numcontext";
import { useContext } from 'react';
import { getPag } from '../redux/gallerySlice';
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { useEffect } from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch()
    const gallery = useAppSelector(state => state.gallery)
  



    return <div className="paginacion">
        <button  onClick={()=>{dispatch(getPag(gallery.photos.info.prev))}}className={"primary"}>Anterior</button>
        <button onClick={()=>{dispatch(getPag(gallery.photos.info.next))}}  className={"primary"}>Siguiente</button>
        
    </div>
}

export default Paginacion;