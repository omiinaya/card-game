export default function Card(props) {
  const card = {
    cardName: "Baby Dragon",
    cardImage: "https://i.ibb.co/wr9CV2B/img.jpg",
    cardRarity: ["x", "x", "x"],
    cardMonster: "[Dragon]",
    cardDesc:
      "Much more than just a child, this dragon is gifted with untapped power.",
    cardAtk: 1200,
    cardDef: 700,
    typeImage: "https://i.ibb.co/nPXKRzG/wind.png",
  };
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
        rel="stylesheet"
      />
      placeholder
      <div id="cardContainer">
        <img
          id="cardTemplate"
          src="https://i.ibb.co/mG6jvpR/monster-normal.png"
        />
        <img id="cardFace" src={card.cardImage} />
        {card.cardRarity.map((card) => (
          <img id="starLevel" key={card} src="https://i.ibb.co/M1bYC6V/star.png" />
        ))}
        <h1 id="cardTitle">{card.cardName}</h1>
        <img id="cardType" src={card.typeImage} />
        <h4 id="monsterType">{card.cardMonster}</h4>
        <div id="monsterDescription">{card.cardDesc}</div>
        <div id="monsterAtk">{card.cardAtk}</div>
        <div id="monsterDef">{card.cardDef}</div>
      </div>
    </div>
  );
}
