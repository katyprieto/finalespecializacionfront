import './tarjeta-episodio.css';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from "prop-types";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * @autor katyana prieto
 * @param {Object} props - Propiedades
 * @param {string} props.nombre - es la props del nombre
 * @param {string} props.episodo - es la iformacion del episodio
 * @param {string} props.date - es la props de la fecha en que se lanzo el episodio
 * @returns {JSX.Element} contiene toda la informaicon sobre el episodio
 *
 *
 */


interface Props{
    nombre:string,
    episode:string,
    date:string,
}
const TarjetaEpisodio = ({nombre,episode,date}:Props) => {
  
 



    return <div className="tarjeta-episodio">
     
  
           <div>
            <h4>{nombre}</h4>
           
            <div>
                <span>{episode}</span>
                
                <span>{date}</span>
            </div>
            </div>
           
           
    </div>
}


TarjetaEpisodio.propType = {
    nombre: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
 
}

export default TarjetaEpisodio;