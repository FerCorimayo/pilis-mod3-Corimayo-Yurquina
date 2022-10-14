import { useForm } from "react-hook-form";
import { getCards } from '../../service'
import { useContext, useEffect, useState } from 'react';
import { CardsContext } from '../../context/CardContex'
import { useNavigate } from 'react-router-dom';


const  NewCard = () => {
    const navigate = useNavigate()
    const[coordenadas,setCooredenadas]=useState([])

    const { cardsInfo,setCards } = useContext(CardsContext)



    /*https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${-24.255107931678122}&longitude=${-65.21823581670436}&timezone=America/Argentina/Jujuy*/
    const {register, handleSubmit, formState: {errors}}=useForm();
    

    const onSubmit = (data) => {
        console.log(data)
        const coords = [parseFloat(data.text),parseFloat(data.text2),data.text,data.tex2,data.text3]
        
        console.log(cardsInfo)
        
        setCooredenadas(coords);
      }


      useEffect(()=> {
        console.log(cardsInfo)
        if(coordenadas.length>1){
          getCards(coordenadas[0],coordenadas[1])
          .then((data) => {
            const informacion={id:cardsInfo.length+1,lugar: coordenadas[4],latitude: data.latitude,longitude: data.longitude,temperatura: data.current_weather.temperature,velocidadViento: data.current_weather.windspeed}
            setCooredenadas([0])
            setCards([...cardsInfo,informacion]);
            navigate('/')
        })
        .catch((err) => console.log(err));


      }
    }, [coordenadas])


    return (
        <>
        <h1>Formulario De creacion de targeta</h1>
    <div className="Contenedor">
      <h1>Formularios</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type='text'
            placeholder="Nombre de lugar"
            {...register(
              'text3',
              
            )}
          />
          <p>{errors.text3?.message}</p>
          <input className="imput-coord"
            type='text'
            placeholder="latitud"
            {...register(
              'text',
              
            )}
          />
          <p>{errors.text?.message}</p>

          <input className="imput-coord"
            type='text'
            placeholder="longitud"
            {...register(
              'text2',
              
            )}
          />
          <p>{errors.text2?.message}</p>


          <button type='submit'>Enviar</button>

          
      </form>
      
    </div>
        </>
    );
};
export default NewCard;