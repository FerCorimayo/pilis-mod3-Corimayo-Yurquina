import { useContext } from 'react';
import { CardsContext } from '../../context/CardContex'
import Cards from '../../components/Cards'
const Home = () => {
    const { cardsInfo } = useContext(CardsContext);
    console.log(cardsInfo)
    return (
        <>
        <h3>Inicio</h3>
        <Cards cards={cardsInfo}/>
        </>
    );
};
export default Home;