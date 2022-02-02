import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import DropZone from "./DropZone";
import { ItemTypes } from "./ItemTypes";
import CardTemplate from "../cardTemplate/CardTemplate";

const style = {};
const PlayerCard = ({ data, handleDrop, path }) => {
  const card = data.children[0]
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.COLUMN,
    item: {
      id: data.id,
      children: data.children,
      path,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You placed ${card.cardName} on the ${dropResult.name}!`);
      }
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderComponent = (card) => {
    return (
      <div className="card">
        <CardTemplate
          id={card.id}
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
  };

  const currentPath = `${path}-${data.length}`;

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="base draggable column"
    >
      <React.Fragment key={data.id}>
        <DropZone
          data={{
            path: `${path}-${data.length}`,
            childrenCount: data.length,
          }}
          onDrop={handleDrop}
        />
        {renderComponent(data.children[0], currentPath)}
      </React.Fragment>
      <DropZone
        data={{
          path: currentPath,
          childrenCount: data.length,
        }}
        onDrop={handleDrop}
        isLast
      />
    </div>
  );
};
export default PlayerCard;
