import { memo } from 'react';
import Field from './Field';
import Hand from './Hand';
import axios from "axios";
import { useEffect, useState } from "react";

const PlayerHand = memo(function Container() {

    const [init, setInit] = useState(false)
    const [onHand, setOnHand] = useState([])
    const [onField, setOnField] = useState([])

    const getCards = () => {
        //if onHand have not loaded yet then load them from server.
        if (onHand.length === 0) {
            axios.get(`/api/card`).then((res) => {
                let hand = res.data.data.sort(() => Math.random() - Math.random()).slice(0, 10)
                sortIDs(hand)
                setOnHand(hand);
            });
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        sortIDs(onHand)
        console.log(onHand)
    }, [onHand]);

    useEffect(() => {
        sortIDs(onField)
        console.log(onField)
    }, [onField]);

    const handleCardPlayed = (index) => {
        setOnHand(prev => prev.filter((card) => {
            console.log(card.id, index)
            return Number(card.id) != Number(index - 1)
        }))
        setOnField(prevArray => [...prevArray, onHand.filter(card => card.id == index - 1)[0]])
    }

    const sortIDs = (array) => {
        var myArray = array
        myArray.forEach(function (element, index) {
            element.id = (init ? index : index + 1);
        });
        if (!init) setInit(true)
    }

    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Field cards={onField} />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Hand cards={onHand} playCard={handleCardPlayed} />
            </div>
        </div>
    );
});

export default PlayerHand