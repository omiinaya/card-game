import React, { useState, useEffect, useCallback } from "react";
import PlayerHand from "./PlayerHand";
import EnemyHand from "./EnemyHand";
import EnemyCard from "./EnemyCard";
import PlayerField from "./PlayerField";
import {
  handleMoveWithinParent,
  handleMoveToDifferentParent,
  handleMoveSidebarComponentIntoParent,
} from "./helpers";

import { ItemTypes } from "./ItemTypes";
//import styles from './animations'

const Board = (props) => {
  const onHand = props.onHand;
  const onEnemy = props.onEnemy;
  const onEHand = props.onEHand;
  const playCard = props.playCard;
  const attackCard = props.attackCard;
  //const classes = styles();

  const init = [
    {
      type: ItemTypes.ROW,
      id: "row0",
      children: [],
    },
  ];

  const [layout, setLayout] = useState(init);

  useEffect(() => {
    let x = layout[0].children
    if (x) {
      x.forEach(y => {
        console.log(y.children[0].cardName)
      })
    }
  }, [layout]);

  const handleDrop = useCallback(
    (dropZone, item) => {
      //console.log("dropZone", dropZone);
      //console.log("item", item);

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

  // dont use index for key when mapping over items
  // causes this issue - https://github.com/react-dnd/react-dnd/issues/342
  return (
    <div className="body">
      <div className="pageContainer">
        <div className="enemyHand">
          {Object.values(onEHand).map((card, index) => (
            <div key={`EnemyHand${card.id}${index}`} className={"sideBarFace"}>
              <EnemyHand key={card.id} data={card} onHand={onEHand} />
            </div>
          ))}
        </div>
        <div className="enemyField">
          {Object.values(onEnemy).map((card, index) => (
            <EnemyCard
              key={`EnemyField${card.id}${index}`}
              data={card}
              onHand={onEnemy}
            />
          ))}
        </div>
        <div className="playerField">
          <PlayerField
            key={layout[0].id}
            data={layout[0]}
            attackCard={attackCard}
            handleDrop={handleDrop}
            path={0}
          />
        </div>
        );
        <div className="sideBar">
          {Object.values(onHand).map((card, index) => {
            return (
              <div
                key={`PlayerHand${card.id}${index}`}
                className={"sideBarFace"}
              >
                <PlayerHand data={card} onHand={onHand} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Board;
