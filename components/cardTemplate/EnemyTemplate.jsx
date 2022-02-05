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

export default function EnemyTemplate(props) {
  //console.log(props)
  return (
    <Card transX={-14.000000} transY={-50.000000}>
      <Frame Name={'cardback'} />
    </Card>
  );
}
