import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COLUMN } from "./constants";
import DropZone from "./DropZone";

const style = {};
const Column = ({ data, components, handleDrop, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: COLUMN,
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
    //console.log(component)
    return <div style={{ width: "100px" }}>{component.id}</div>;
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
