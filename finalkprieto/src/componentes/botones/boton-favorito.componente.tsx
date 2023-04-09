import './boton-favorito.css';
import PropTypes from "prop-types";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * @autor katyana prieto
 * Componente de botón-favorito
 * @param {Object} props 
 * @param {boolean} props.esFavorito - este boton es del tipo booleano e indica si esta marcado como favorito la imagen estrella o no
 * @param {function} props.onClick - esta funcion maneja el evento que si se marca lo setea como favorito y si se desmarca vuelve a no ser favorito
 * @returns {JSX.Element} retorna el Componente con el boton de favorito que se marca y se desmarca
 *
 */


interface Props{
    esFavorito:boolean,
    onClick:()=>void,
}

const BotonFavorito = ({onClick,esFavorito}:Props) => {

    
    
 
    
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick} >
        <img  src={src} alt={"favorito"} />
    </div>
}


BotonFavorito.propTypes = {
    esFavorito: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
    
    
}

export default BotonFavorito;