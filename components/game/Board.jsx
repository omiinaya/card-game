import axios from "axios";
import { useEffect, useState } from "react";
import EField from "./EField";
import Field from "./Field";
import Example from "../test/example";
import Hand from "./Hand";
import { ItemTypes } from "./ItemTypes";

const PlayerHand = () => {
  const [onHand, setOnHand] = useState([]);
  const [onField, setOnField] = useState([]);
  const [onEnemy, setOnEnemy] = useState([]);
  const [onTest, setOnTest] = useState([]);

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
        let test = res.data.data
          .sort(() => Math.random() - Math.random())
          .slice(0, 5);
        serializeCards(hand);
        setOnHand(hand);
        setOnEnemy(enemy);
        setOnTest(test);
      });
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    //console.log(onHand);
  }, [onHand]);

  useEffect(() => {
    //console.log(onField);
  }, [onField]);

  useEffect(() => {
    //console.log(onEnemy);
  }, [onEnemy]);

  const handleCardPlayed = (index) => {
    setOnHand((prev) => prev.filter((card) => card.id != index));
    /*
    setOnField((prevArray) => [
      ...prevArray,
      onHand.filter((card) => card.id == index)[0],
    ]);
    */
  };

  const serializeCards = (data) => {
    var myArray = data;
    myArray.forEach(function(element, index) {
      element.id = index;
      element.type = ItemTypes.SIDEBAR_ITEM;
    });
  };

  return (
    <div style={{ overflow: "hidden", clear: "both" }}>
      {/*<Field cards={onField} />*/}
      <Example
        onEnemy={onEnemy}
        onHand={onHand}
        onTest={onTest}
        playCard={handleCardPlayed}
      />
    </div>
  );
};

export default PlayerHand;
