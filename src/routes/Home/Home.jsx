import { useContext } from 'react';
import { CardsContext } from '../../context/CardContex'
import Cards from '../../components/Cards'
import './Home.css';

const Home = () => {
    const { cardsInfo } = useContext(CardsContext);
    console.log(cardsInfo)
    return (
        <>
        <p className='home_titulo'>Targetas guardadas</p>
        <Cards cards={cardsInfo}/>
        </>
    );
};
export default Home;