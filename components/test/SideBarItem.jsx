import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes"
import CardCard from "../cardCard/CardCard";

const SideBarItem = ({ data }) => {
  //console.log(data)
  const [{ opacity }, drag] = useDrag({
    type: ItemTypes.SIDEBAR_ITEM,
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      <div style={{ width: "150px" }}>
        <CardCard
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
    </div>
  );
};
export default SideBarItem;
