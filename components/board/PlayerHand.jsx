import { memo } from 'react';
import { Board } from './Board';
import { Box } from './Box';
import axios from "axios";
import { useEffect, useState } from "react";

const PlayerHand = memo(function Container() {

    const [cards, setCards] = useState([]);

    const getCards = () => {
        axios.get(`/api/card`).then((res) => {
            setCards(res.data.data);
        });
    };

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        console.log(cards);
    }, [cards]);

    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Board />
            </div>
            <div className="cards">
                {cards.map((card, index) => (
                    <div key={card.cardName + index}>
                        <div className="generated-card">
                            <Box
                                cardName={card.cardName}
                                cardImage={card.cardImage}
                                cardRarity={card.cardRarity}
                                cardType={card.cardType}
                                typeImage={card.typeImage}
                                cardDesc={card.cardDesc}
                                cardMonster={card.cardMonster}
                                cardAtk={card.cardATK}
                                cardDef={card.cardDEF}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default PlayerHand