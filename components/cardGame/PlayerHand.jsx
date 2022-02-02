import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import CardTemplate from "../cardTemplate/CardTemplate";

const PlayerHand = ({ data }) => {
  //console.log(data)
  const [{ opacity }, drag] = useDrag({
    type: ItemTypes.SIDEBAR_ITEM,
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        //playCard(item.id)
        console.log(`You placed ${data.cardName} on the ${dropResult.name}!`);
      }
    },
  });

  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      <CardTemplate
        id={data.id}
        cardName={data.cardName}
        cardImage={data.cardImage}
        cardRarity={data.cardRarity}
        cardType={data.cardType}
        cardSubType={data.cardSubType}
        cardDesc={data.cardDesc}
        typeImage={data.typeImage}
        cardATK={data.cardATK}
        cardDEF={data.cardDEF}
      />
    </div>
  );
};
export default PlayerHand;
