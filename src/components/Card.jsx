import {useContext} from 'react';
import {CardsContext} from '../context/CardContex'
import {ImBin2} from 'react-icons/im';

const Card = ({box}) => {
    const {cardsInfo,setCards} = useContext(CardsContext);
    console.log(box)
    const {id, lugar, latitude, longitude, temperatura, velocidadViento} = box
    const eliminar = () =>{
        setCards(cardsInfo.filter((del) => del.id !== id))
        console.log(cardsInfo)
    }
return(
    <>
    <div className='card'>
    <h1>{id}</h1>
    <h1>{lugar}</h1>
    <h1>{latitude}</h1>
    <h1>{longitude}</h1>
    <h1>{temperatura}</h1>
    <h1>{velocidadViento}</h1>
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
