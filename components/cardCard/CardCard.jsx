export default function CardCard(props) {
  //console.log(props)
  return (
    <div>
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
  );
}
