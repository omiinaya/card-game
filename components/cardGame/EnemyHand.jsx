import React from "react";
import EnemyTemplate from "../cardTemplate/EnemyTemplate";

const EnemyHand = ({ data }) => {
  //console.log(data)

  return (
    <div className="sideBarItem">
      <EnemyTemplate
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
  );
};
export default EnemyHand;
