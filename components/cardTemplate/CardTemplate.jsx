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
} from "./CardConfig";

export default function CardTemplate(props) {
  //console.log(props)
  return (
    <Card>
      <Image id={props.cardName} clip />
      <Frame />
      <Cost fontFamily="Belwe">?</Cost>
      <Race fontFamily="Belwe">{props.cardSubType}</Race>
      <Health fontFamily="Belwe">{props.cardDEF}</Health>
      <Strength fontFamily="Belwe">{props.cardATK}</Strength>
      <Rarity id="common" />
      <Title fontFamily="Belwe" flow>
        {props.cardName}
      </Title>
      <Set id="gvg" />
      <Text rich>{"<b>Deathrattle:</b> Summon a random 2-Cost minion."}</Text>
    </Card>
  );
}
