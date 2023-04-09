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
 *  @autor katyana prieto
 * componete de paginacion
 * @param {function} button.onClick- Función para ir a la paguina anterior
 * @param {function} button.onClick - Función para ir a la paguina siguiente
 * @returns {JSX.Element} Componente que maneja la paguinacion para ir a la paguina anterior y siguiente
 */
 
const Paginacion = () => {
    const dispatch = useAppDispatch()
    const pagina = useAppSelector(state => state.gallery.info)
  



    return <div className="paginacion">
        <button  onClick={()=>{dispatch(getPag(pagina.prev))}}className={"primary"}>Anterior</button>
        <button onClick={()=>{dispatch(getPag(pagina.next))}}  className={"primary"}>Siguiente</button>
        
    </div>
}



export default Paginacion;