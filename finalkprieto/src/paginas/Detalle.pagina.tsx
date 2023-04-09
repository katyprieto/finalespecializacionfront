import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch } from "../componentes/redux/hook";
import { useAppSelector } from "../componentes/redux/hook";
import { useState } from "react";
import { useEffect } from "react";
import { actionFavorito } from "../componentes/redux/gallerySlice";
/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * @autor katyana prieto
 * 
 * 
 * @returns la pagina de detalle
 */


 

export interface ListEpisodios {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}




//const PaginaDetalle = () => {
    const PaginaDetalle = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const detalle:number[]=useAppSelector(state => state.gallery.detalle)
console.log({detalle})
//const[selectper,setSelectper]= useState([]);
const[selectper,setSelectper]= useState<{
    id:number,
    name: string,
    gender: string,
    origin: {
      name: string,
      url: string,
    },
    image: string,
    episode:string [],
    }>({
        id:0,
        name: "",
        gender: "",
        origin: {
          name: "",
          url: "",
        },
        image:"",
        episode: [""],
    }

    );
const[episodioId,setEpisodioId]= useState([]);
const favoritos:number[]=useAppSelector(state => state.gallery.favoritos)
const [listEpisodios,setListEpisodios]=useState<ListEpisodios[]>([]);


useEffect(() => {
fetch(`https://rickandmortyapi.com/api/character/${detalle}`)
        .then(response => response.json())
        .then((result) => {
            setSelectper(result);
        });
   }, [{detalle}]);

    console.log(selectper)
   

 
   
   useEffect(() => {
    if (!!selectper?.id) {
        const array= selectper.episode?.map((episodio:any) => {
            return episodio.split("/").at(-1);
          });
    const array1= (array?.join(','))
    console.log(array1)
   {fetch(`https://rickandmortyapi.com/api/episode/${array1}`)
  
    .then(response => response.json())
     .then((result) => {
    
            if(Array.isArray(result)){          
                setListEpisodios(result);
            }
            else{
                setListEpisodios([result])
            }
    
            
    })}}}
   
    ,[selectper])
  
  console.log({selectper})





        const onhandleFavoritoClick = (id:number) => {
            const even = (element:number)=> element === id
            const even2=(element:number)=> element !== id
             const existeid = favoritos.some(even);
             const sacarid=favoritos.filter(even2)
                  if (existeid===false) {
                 dispatch(actionFavorito([...favoritos, id]));
             }
             else{dispatch(actionFavorito(sacarid))}
          };
      
     const  esFavorito=favoritos.some((element)=> element === (selectper.id))
              

    return <div className="container">
       
        <h3>{selectper.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={selectper.image} alt={selectper.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{selectper.name}</p>
                    <p>Planeta:{selectper.origin?.name} </p>
                    <p>Genero: {selectper.gender}</p>
                </div>
                <BotonFavorito esFavorito={esFavorito} onClick={()=>onhandleFavoritoClick(selectper.id)} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {listEpisodios&&listEpisodios?.map((epi:any)=>(
            <TarjetaEpisodio nombre={epi.name}  episode={epi.episode} date={epi.air_date}/>
           
            ))}
        </div>
       
    </div>
}

export default PaginaDetalle