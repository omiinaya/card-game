import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes"

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
      {data.cardName}
    </div>
  );
};
export default SideBarItem;
