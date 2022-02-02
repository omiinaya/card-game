import React from "react";
import DropZone from "./DropZone";
import PlayerCard from "./PlayerCard";

const Row = ({ data, cards, handleDrop, path }) => {
  console.log(cards)

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
  console.log(data.children)
  return (
    <div className="base draggable row">
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
