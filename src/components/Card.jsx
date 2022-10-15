import {useContext} from 'react';
import {CardsContext} from '../context/CardContex'
import {ImBin2} from 'react-icons/im';
import './Card.css';

const Card = ({box}) => {
    const {cardsInfo,setCards} = useContext(CardsContext);
    console.log(box)
    const {id, lugar, latitude, longitude, temperatura, velocidadViento, codigo_tiempo} = box
    const eliminar = () =>{
        setCards(cardsInfo.filter((del) => del.id !== id))
        console.log(cardsInfo)
    }
return(
    <>
    <div className='card'>
    {/* <h2>Targeta N°: {id}</h2> */}
    <p className='card_titulo'>{lugar}</p>
    <p className='card_contenido'>Latitud: {latitude}</p>
    <p className='card_contenido'>Longitud: {longitude}</p>
    <p className='card_contenido'>Temp: {temperatura} °C</p>
    <p className='card_contenido'>V. Viento: {velocidadViento} Km/h</p>
    {/* VER DE ASOCIAR EL CÓDIGO DE CLIMA CON UN ÍCONO */}
    {/* <p className='card_contenido'>Código WW: {codigo_tiempo}</p> */}
    <div className='botones'>
        <div className='btn-del' onClick={eliminar}>
            <ImBin2 className='trash' />
        </div>
    </div>
    </div>
    </>
);
}

export default Card;
