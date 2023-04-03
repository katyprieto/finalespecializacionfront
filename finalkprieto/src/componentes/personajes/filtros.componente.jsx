import { useAppDispatch } from '../redux/hook';
import './filtros.css';
import { useState,useRef,useContext } from 'react';
import { getPhotos,actionBusqueda } from '../redux/gallerySlice'
import { NumContext } from '../context/numcontext';


const Filtros = () => {
    const {bottonReset,setBottonReset}= useContext(NumContext)


const dispatch= useAppDispatch()
const inputElement = useRef();
 const onBuscarClick =(a)=>{
    dispatch(actionBusqueda(a))
    dispatch(getPhotos(a))
 }

console.log(bottonReset)


    if (bottonReset===true){
    inputElement.current.value="";
    onBuscarClick("");
setBottonReset(false)}
  
  

  
    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input onChange={(e)=>{onBuscarClick(e.target.value)}}type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" ref={inputElement}/>
        
        
    </div>
}

export default Filtros;