import React from "react";
import CardTemplate from "../cardTemplate/CardTemplate";

const PlayerHand = ({ data }) => {
  //console.log(data)

  return (
    <div className="sideBarItem">
      <CardTemplate
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
export default PlayerHand;
