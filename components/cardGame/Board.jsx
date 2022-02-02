import React, { useState, useCallback } from "react";
import PlayerHand from "./PlayerHand";
import EnemyCard from "./EnemyCard";
import Row from "./PlayerField";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
} from "./helpers";

import { ItemTypes } from "./ItemTypes";

const Board = (props) => {
  const onHand = props.onHand;
  const onEnemy = props.onEnemy;
  const onTest = props.onTest;
  const playCard = props.playCard;

  const initialData = {
    layout: [
      {
        type: ItemTypes.ROW,
        id: "row0",
        children: [],
      },
    ],
  };

  const [layout, setLayout] = useState(initialData.layout);

  const handleDrop = useCallback(
    (dropZone, item) => {
      console.log("dropZone", dropZone);
      console.log("item", item);

      //removes card from hand when dropped into field.
      playCard(item.id);

      const splitDropZonePath = dropZone.path.split("-");
      const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

      const newItem = {
        id: item.id,
        cardName: item.cardName,
        cardImage: item.cardImage,
        cardRarity: item.cardRarity,
        cardType: item.cardType,
        cardSubType: item.cardSubType,
        cardDesc: item.cardDesc,
        cardATK: item.cardATK,
        cardDEF: item.cardDEF,
      };
      if (item.type === ItemTypes.COLUMN) {
        newItem = item;
      }

      // sidebar into
      if (item.type === ItemTypes.SIDEBAR_ITEM) {
        setLayout(
          handleMoveSidebarComponentIntoParent(
            layout,
            splitDropZonePath,
            newItem
          )
        );
        return;
      }

      // move down here since sidebar items dont have path
      const splitItemPath = item.path.split("-");
      const pathToItem = splitItemPath.slice(0, -1).join("-");

      // 2. Pure move (no create)
      if (splitItemPath.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          setLayout(
            handleMoveWithinParent(layout, splitDropZonePath, splitItemPath)
          );
          return;
        }
        return;
      }

      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem
        )
      );
    },
    [layout]
  );

  const renderRow = (row, currentPath) => {
    return (
      <Row
        key={row.id}
        data={row}
        cards={onTest}
        handleDrop={handleDrop}
        path={currentPath}
      />
    );
  };

  // dont use index for key when mapping over items
  // causes this issue - https://github.com/react-dnd/react-dnd/issues/342
  return (
    <div className="body">
      <div className="pageContainer">
        <div className="sideBar">
          {Object.values(onEnemy).map((card) => (
            <EnemyCard
              key={card.id}
              data={card}
              onHand={onEnemy}
            />
          ))}
        </div>
        {layout.map((row, index) => {
          const currentPath = `${index}`;

          return (
            <React.Fragment key={row.id}>
              {renderRow(row, currentPath)}
            </React.Fragment>
          );
        })}

        <div className="sideBar">
          {Object.values(onHand).map((card) => (
            <div className="sideBarFace">
              <PlayerHand
                key={card.id}
                data={card}
                onHand={onHand}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Board;
