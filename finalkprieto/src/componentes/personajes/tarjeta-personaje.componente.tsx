

import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useNavigate } from 'react-router-dom';
import { actionDetalle } from '../redux/gallerySlice';
import { useAppDispatch } from '../redux/hook';
import { useAppSelector } from '../redux/hook';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *  @autor katyana prieto
 * Componente tarjeta-personajes
 * @param {Object} props - Props de este componente.
 * @param {string} props.image - muestra la url del personaje o sea la imagen del personaje.
 * @param {string} props.name - muestra el nombre del personaje.
 * @param {boolean} props.esFavorito -valor que muestra si es o no favorito a travez de un booleano true o false
 * @param {Function} props.onClick - la funcion marca o desmarca el favorito.
 * @param {number} props.id - es el numero id del personaje de rick and morty
 * @returns un JSX element 
 */


interface Props{
    imagen:string,
    name:string,
    esFavorito:boolean,
    onClick:()=>void,
    id:number,
}


const TarjetaPersonaje = ({imagen,name,esFavorito,onClick,id}:Props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const detalle=useAppSelector(state => state.gallery.detalle)

    const handleDetalle = (id:number) => {
        dispatch(actionDetalle([id]))
        navigate('/detalle');
    }


    return <div className="tarjeta-personaje">
        <img onClick={ () => handleDetalle(id)}
        src={imagen} alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito onClick={onClick} esFavorito={esFavorito}/>
        </div>
    </div>
}

export default TarjetaPersonaje;