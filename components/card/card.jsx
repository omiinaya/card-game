export default function Card(props) {
const card = { 
    cardName: 'Baby Dragon', 
    cardImage: 'https://i.ibb.co/wr9CV2B/img.jpg',
    cardMonster: '[Dragon]',
    cardDesc: 'Much more than just a child, this dragon is gifted with untapped power.',
    cardAtk: 1200,
    cardDef: 700,
    typeImage: 'https://i.ibb.co/nPXKRzG/wind.png'

}
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
        <h1 id="cardTitle">{card.cardName}</h1>
        <img id="starLevel" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel2" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel3" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel4" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel5" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel6" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel7" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel8" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel9" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel10" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel11" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="starLevel12" src="https://i.ibb.co/M1bYC6V/star.png" />
        <img id="cardType" src={card.typeImage} />
        <h4 id="monsterType">{card.cardMonster}</h4>
        <div id="monsterDescription">
            {card.cardDesc}
        </div>
        <div id="monsterAtk">{card.cardAtk}</div>
        <div id="monsterDef">{card.cardDef}</div>
      </div>
    </div>
  );
}
