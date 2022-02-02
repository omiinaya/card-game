import React from "react";
import { useDrop } from "react-dnd";
import DropZone from "./DropZone";
import PlayerCard from "./PlayerCard";
import { ItemTypes } from "./ItemTypes";

const Row = ({ data, handleDrop, path }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.SIDEBAR_ITEM,
    drop: () => ({
      name: 'Field',
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const renderColumn = (column, currentPath) => {
    return (
      <PlayerCard
        key={column.id}
        data={column}
        handleDrop={handleDrop}
        path={currentPath}
      />
    );
  };

  return (
    <div
      className="base draggable row"
      ref={drop}
      role={"Field"}
    >
      <div className="columns">
        {data.children.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
              />
              {renderColumn(column, currentPath)}
            </React.Fragment>
          );
        })}

        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
        //isLast
        />
      </div>
    </div>
  );
};
export default Row;
