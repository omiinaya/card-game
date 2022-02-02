import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import Enemy from "./Enemy";

const EnemyField = ({ data }) => {
  //console.log(data)
  const [{ opacity }, drag] = useDrag({
    type: ItemTypes.SIDEBAR_ITEM,
    item: data,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return <Enemy card={data} />;
};
export default EnemyField;
