import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes"

const SideBarItem = ({ data, onHand }) => {
  //console.log(data)
  console.log(onHand)
  const [{ opacity }, drag] = useDrag({
    type: ItemTypes.SIDEBAR_ITEM,
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      {data.content}
    </div>
  );
};
export default SideBarItem;
