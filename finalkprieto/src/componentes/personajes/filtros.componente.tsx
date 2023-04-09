import { useAppDispatch } from '../redux/hook';
import './filtros.css';
import { useState,useRef,useContext } from 'react';
import { getPhotos,actionBusqueda } from '../redux/gallerySlice'
import { NumContext } from '../context/numcontext';






const Filtros = () => {
    const {bottonReset,setBottonReset}= useContext<any>(NumContext)
  

const dispatch= useAppDispatch()



const inputElement:any = useRef();
 const onBuscarClick =(a:any)=>{
    dispatch(actionBusqueda(a))
    dispatch(getPhotos(a))
 }




    if (bottonReset===true){
    inputElement.current.value="";
    onBuscarClick("");
setBottonReset(false)}
  
  

  
    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input onChange={(e)=>{onBuscarClick(e.target.value)}}type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" ref={inputElement}/>
        
        
    </div>
}




export default Filtros;