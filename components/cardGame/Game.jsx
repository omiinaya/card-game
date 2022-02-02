import axios from "axios";
import { useEffect, useState } from "react";
import Board from "./Board";
import { ItemTypes } from "./ItemTypes";

const Game = () => {
  const [onHand, setOnHand] = useState([]);
  const [onEnemy, setOnEnemy] = useState([]);
  const [onTest, setOnTest] = useState([]);

  const getCards = () => {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios.get(`/api/card`).then((res) => {
        let hand = res.data.data
          .sort(() => Math.random() - Math.random())
          .slice(0, 9);
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
    //console.log(onEnemy);
  }, [onEnemy]);

  const handleCardPlayed = (index) => {
    setOnHand((prev) => prev.filter((card) => card.id != index));
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
      <Board
        onEnemy={onEnemy}
        onHand={onHand}
        onTest={onTest}
        playCard={handleCardPlayed}
      />
    </div>
  );
};

export default Game;
