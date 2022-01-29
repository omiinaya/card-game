import { memo, useCallback, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Card } from "./Card";
import update from "immutability-helper";
import { ItemTypes } from "./ItemTypes";

const style = {
  height: "250px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const Container = memo(function Container(props) {
  const [cards, setCards] = useState(props.cards);

  useEffect(() => {
    console.log(props.cards);
    setCards(props.cards);
  }, [props.cards]);

  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );
  const [, drop] = useDrop(() => ({ accept: ItemTypes.FIELDCARD }));
  return (
    <div ref={drop} style={style}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={`${card.id}`}
          card={card}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  );
});

export default Container;
