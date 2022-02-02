import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import CardCard from "../cardCard/CardCard";

export const Enemy = (props) => {
  const card = props.data;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COLUMN,
    drop: () => ({ name: card.cardName }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "white";

  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div
      ref={drop}
      role={"Enemy"}
      className="enemy"
      style={{ backgroundColor }}
    >
      <CardCard
        id={card.id}
        cardName={card.cardName}
        cardImage={card.cardImage}
        cardRarity={card.cardRarity}
        cardType={card.cardType}
        typeImage={card.typeImage}
        cardDesc={card.cardDesc}
        cardSubType={card.cardSubType}
        cardATK={card.cardATK}
        cardDEF={card.cardDEF}
        playCard={props.playCard}
      />
    </div>
  );
};

export default Enemy;
