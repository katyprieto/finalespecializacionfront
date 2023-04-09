import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useEffect} from 'react'
import { actionFavorito, getPag, getPhotos } from '../redux/gallerySlice'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { Photo } from '../redux/gallerySlice';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *  @autor katyana prieto
 * Componente grilla-personajes.componentes
 * @param {Object} Props - Props de este componente
 * @param {Array<Object>} props.gallery - Array de objetos muestra los personajes de rick and morty
 * @param {Function} props.onhandleFavoritoClick - funcion para agregar o quitar de favoritos a un personaje de rick and morty
 * @param {Array<number>} props.favoritos - array que contiene los numero de los personajes favoritos
 * @returns {JSX.Element} Componente grilla-personaje-componente que muestra la grilla que contiene las tarjetas de los personajes de rick and morty
 */ 


interface Props{
    gallery: Photo[],
    onhandleFavoritoClick:(id:number)=>void,
    favoritos:number[]
}


const GrillaPersonajes = ({gallery,onhandleFavoritoClick,favoritos}:Props) => {


 
    return <div className="grilla-personajes">
        
      
        { gallery&&gallery?.map((photo:any) => (
            
       <TarjetaPersonaje 
       key={photo.id}
       imagen={photo.image} 
       name={photo.name} 
       id={photo.id}
       onClick={()=>onhandleFavoritoClick(photo.id)}
       esFavorito={favoritos.some((element:number)=> element === (photo.id))}
       />
       
       ))}
    </div>
   
}
 
export default GrillaPersonajes;