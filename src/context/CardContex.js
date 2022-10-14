import { createContext } from "react";

export const CardsContext = createContext({
    cardsInfo: [],
    setCards: () => {}
})

export const CardsProvider = ({ children }) => {
    const [cardsInfo, setCards] = useState([]);
    const value = { cardsInfo, setCards };
    return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>;
}