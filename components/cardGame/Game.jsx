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
    //console.log(onHand);
  }, [onHand]);

  useEffect(() => {
    //console.log(onEnemy);
  }, [onEnemy]);

  const handleCardPlay = (index) => {
    setOnHand((prev) => prev.filter((card) => card.id != index));
  };

  const handleCardAttack = (sent, sentBy, received, receivedBy) => {
    if (sent && sentBy && received && receivedBy) {
      console.log(`${sentBy} attacked ${receivedBy} and inflicted ${sent} damage, leaving it with ${received-sent} health`)
    }
  };

  const serializeCards = (data) => {
    var myArray = data;
    myArray.forEach(function (element, index) {
      element.id = index;
      element.type = ItemTypes.SIDEBAR_ITEM;
    });
  };

  return (
    <div style={{ overflow: "hidden", clear: "both" }}>
      <Board
        onEnemy={onEnemy}
        onHand={onHand}
        playCard={handleCardPlay}
        attackCard={handleCardAttack}
      />
    </div>
  );
};

export default Game;
