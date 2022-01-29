import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import CardCard from "../cardCard/CardCard";

const style = {
  //border: "1px dashed gray",
  //backgroundColor: "white",
  cursor: "move",
};
export const Card = memo(function Card({
  id,
  card,
  moveCard,
  findCard,
}) {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.FIELDCARD,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          //playCard(item.id)
          console.log(`You used ${card.cardName} to attack ${dropResult.name}!`);
        }
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.FIELDCARD,
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  const opacity = isDragging ? 0 : 1;
  return (
    <div ref={(node) => drag(drop(node))} style={{ ...style, opacity }}>
      <CardCard
        id={id}
        cardName={card.cardName}
        cardImage={card.cardImage}
        cardRarity={card.cardRarity}
        cardType={card.cardType}
        cardSubType={card.cardSubType}
        cardDesc={card.cardDesc}
        typeImage={card.typeImage}
        cardATK={card.cardATK}
        cardDEF={card.cardDEF}
      />
    </div>
  );
});
