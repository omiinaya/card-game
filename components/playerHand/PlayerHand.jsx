import axios from "axios";
import { useEffect, useState } from "react";
import MonsterCard from "../monsterCard/MonsterCard";

export default function PlayerHand() {
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
    //console.log(cards);
  }, [cards]);

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card-container" key={card+index}>
          <div className="card-container-face">
            <div className="generated-card">
              <MonsterCard
                cardName={cards[index].cardName}
                cardImage={cards[index].cardImage}
                cardRarity={cards[index].cardRarity}
                cardMonster={cards[index].cardMonster}
                cardDesc={cards[index].cardDesc}
                cardAtk={cards[index].cardATK}
                cardDef={cards[index].cardDEF}
                typeImage={cards[index].typeImage}
              />
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
}
