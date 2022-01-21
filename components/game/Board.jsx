import { memo } from 'react';
import Field from './Field';
import Hand from './Hand';
import axios from "axios";
import { useEffect, useState } from "react";

const PlayerHand = memo(function Container() {

    const [cards, setCards] = useState([]);

    const getCards = () => {
        //if cards have not loaded yet then load them from server.
        if (cards.length === 0) {
            axios.get(`/api/card`).then((res) => {
                setCards(res.data.data);
            });
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        sortCardIds();
    }, [cards]);

    const handleCardPlayed = (x) => {
        setCards(prev => prev.filter(card => {
            return card.id != x - 1
        }))
    }

    const sortCardIds = () => {
        var myArray = cards
        myArray.forEach(function (element, index) {
            element.id = index;
        });
    }

    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Field />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Hand cards={cards} playCard={handleCardPlayed}/>
            </div>
        </div>
    );
});

export default PlayerHand