import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import DropZone from "./DropZone";
import { ItemTypes } from "./ItemTypes";

const style = {};
const Column = ({ data, handleDrop, path }) => {
  console.log(data)
  
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
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderComponent = (component, currentPath) => {
    console.log(component.children[0].cardName)
    return <div style={{ width: "100px" }}>{component.children[0].cardName}</div>;
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
        {renderComponent(data, currentPath)}
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
export default Column;
