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

export default function PlayerTemplate(props) {
  //console.log(props)
  return (
    <Card transX={-14.000000} transY={-50.000000}>
      <Image id={props.cardName} clip />
      <Frame Name={"mNeutral"} Width={"764"} HEight={"1100"} />
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
