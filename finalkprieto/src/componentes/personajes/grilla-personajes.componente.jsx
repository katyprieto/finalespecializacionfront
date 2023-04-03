import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useEffect} from 'react'
import { actionFavorito, getPag, getPhotos } from '../redux/gallerySlice'
import { useAppDispatch, useAppSelector } from '../redux/hook'



/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({gallery,onhandleFavoritoClick,favoritos}) => {
console.log(gallery)
console.log(onhandleFavoritoClick)
console.log(favoritos)


 
    return <div className="grilla-personajes">
      
        {gallery.photos.results?.map((photo) => (
            
       <TarjetaPersonaje 
       key={photo.id}
       imagen={photo.image} 
       name={photo.name} 
       onClick={()=>onhandleFavoritoClick(photo.id)}
       esFavorito={favoritos.some((element)=> element === (photo.id))}
       />
       
       ))}
    </div>
   
}
 
export default GrillaPersonajes;