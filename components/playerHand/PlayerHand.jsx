import axios from "axios";
import { useEffect, useState } from "react";
import MonsterCard from "../monsterCard/MonsterCard";

export default function PlayerHand(props) {
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
    <div class="cards">
      {cards.map((card, index) => (
        <div class="card">
          <div class="card-face">
            <div class="generated-card">
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
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
      <div class="card">
        <div class="card-face">
          <div class="card-label">test</div>
        </div>
      </div>
    </div>
  );
}
