import EField from "./EField";
import Field from "./Field";
import Hand from "./Hand";
import axios from "axios";
import { useEffect, useState } from "react";
//import Example from "./Example";

const PlayerHand = () => {
  const [onHand, setOnHand] = useState([]);
  const [onField, setOnField] = useState([]);
  const [onEnemy, setOnEnemy] = useState([]);

  const getCards = () => {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios.get(`/api/card`).then((res) => {
        let hand = res.data.data
          .sort(() => Math.random() - Math.random())
          .slice(0, 10);
        let enemy = res.data.data
          .sort(() => Math.random() - Math.random())
          .slice(0, 3);
        serializeCards(hand);
        setOnHand(hand);
        setOnEnemy(enemy);
      });
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    console.log(onHand);
  }, [onHand]);

  useEffect(() => {
    console.log(onField);
  }, [onField]);

  useEffect(() => {
    console.log(onEnemy);
  }, [onEnemy]);

  const handleCardPlayed = (index) => {
    setOnHand((prev) => prev.filter((card) => card.id != index));
    setOnField((prevArray) => [
      ...prevArray,
      onHand.filter((card) => card.id == index)[0],
    ]);
  };

  const serializeCards = (data) => {
    var myArray = data;
    myArray.forEach(function(element, index) {
      element.id = index;
      console.log(element.id);
    });
  };

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <EField cards={onEnemy} />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Field cards={onField} />
        {/*<Example />*/}
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Hand cards={onHand} playCard={handleCardPlayed} />
      </div>
    </div>
  );
}

export default PlayerHand;
