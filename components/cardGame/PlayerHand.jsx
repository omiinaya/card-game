import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import CardTemplate from "../cardTemplate/CardTemplate";

const PlayerHand = ({ data }) => {
  //console.log(data)
  const [{ opacity, display, pointerEvents }, drag] = useDrag({
    type: ItemTypes.SIDEBAR_ITEM,
    item: data,
    collect: (monitor) => {
      //cancelmouseevents on sidebar
      return {
        //hide magnified card while dragging
        opacity: monitor.isDragging() ? 0 : 1,
        //allows dropping cards into field through hidden magnified card
        pointerEvents: monitor.isDragging() ? "none" : "auto",
      };
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        //playCard(item.id)
        console.log(`You placed ${data.cardName} on the ${dropResult.name}!`);
      }
    },
  });

  return (
    <div className="sideBarItem" ref={drag} style={{ opacity, pointerEvents }}>
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
