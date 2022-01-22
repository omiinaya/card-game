import { memo } from 'react';
import Field from './Field';
import Hand from './Hand';
import axios from "axios";
import { useEffect, useState } from "react";

const PlayerHand = memo(function Container() {

    const [onHand, setOnHand] = useState([])
    const [onField, setOnField] = useState([])

    const getCards = () => {
        //if onHand have not loaded yet then load them from server.
        if (onHand.length === 0) {
            axios.get(`/api/card`).then((res) => {
                setOnHand(res.data.data);
            });
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    useEffect(() => {
        sortOnHand()
        //console.log(onHand)
    }, [onHand]);

    useEffect(() => {
        sortOnField()
        //console.log(onField)
    }, [onField]);

    const handleCardPlayed = (index) => {
        setOnHand(prev => prev.filter(card => card.id != index - 1))
        setOnField(prevArray => [...prevArray, onHand.filter(card => card.id == index - 1)[0]])
    }

    const sortOnHand = () => {
        var myArray = onHand
        myArray.forEach(function (element, index) {
            element.id = index;
        });
    }

    const sortOnField = () => {
        var myArray = onField
        myArray.forEach(function (element, index) {
            element.id = index;
        });
    }

    return (
        <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Field cards={onField}/>
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
                <Hand cards={onHand} playCard={handleCardPlayed} />
            </div>
        </div>
    );
});

export default PlayerHand