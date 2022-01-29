import {
  Card,
  Frame,
  Cost,
  Image,
  Title,
  Set,
  Rarity,
  Text,
  Strength,
  Health,
  Race,
} from "../hsCard/HearthstoneCard";

export default function CardCard(props) {
  //console.log(props)
  return (
    /*
    <div style={{ color: 'black' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
        rel="stylesheet"
      />
      <div id="cardContainer">
        <img
          id="cardTemplate"
          src="https://i.ibb.co/mG6jvpR/monster-normal.png"
        />
        <img
          id="cardFace"
          src={props.cardImage} />
        <img
          id="starLevel"
          src="https://i.ibb.co/M1bYC6V/star.png"
        />
        <div id="cardTitle">{props.cardName}</div>
        <img id="cardType" src={props.typeImage} />
        <h4  id="cardSubType">[{props.cardSubType}]</h4>
        <div id="cardDesc">{props.cardDesc}</div>
        <div id="cardAtk">{props.cardAtk}</div>
        <div id="cardDef">{props.cardDef}</div>
      </div>
    </div>
    */
    <Card>
      <Image id={props.cardName} clip />
      <Frame />
      <Cost fontFamily="Belwe">?</Cost>
      <Race fontFamily="Belwe">{props.cardSubType}</Race>
      <Health fontFamily="Belwe">{props.cardDef}</Health>
      <Strength fontFamily="Belwe">{props.cardAtk}</Strength>
      <Rarity id="common" />
      <Title fontFamily="Belwe" flow>
        {props.cardName}
      </Title>
      <Set id="gvg" />
      <Text rich>{"<b>Deathrattle:</b> Summon a random 2-Cost minion."}</Text>
    </Card>
  );
}
