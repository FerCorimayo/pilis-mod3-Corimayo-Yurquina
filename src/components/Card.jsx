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
    <h2>{lugar}</h2>
    <h3>Lat: {latitude}</h3>
    <h3>Long: {longitude}</h3>
    <h3>Temp: {temperatura} °C</h3>
    <h3>V. Viento: {velocidadViento} Km/h</h3>
    <h3>Codigo WW: {codigo_tiempo}</h3>
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
