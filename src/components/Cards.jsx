import Card from "../components/Card";
import './Cards.css'

const Cardes = ({cards}) => {
    cards.map((cards) => {console.log(cards)}) 
    return (
        <>
        <div className="grid">
        {cards.map((card) => (
            <Card key = {card.id} box = {card} />
        ))}
        </div>
        </>
    );
}

export default Cardes