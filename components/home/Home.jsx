import Board from "../game/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
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
  Race
} from "../hsCard/HearthstoneCard";


export default function Home(props) {
  const { user, origin, deviceType, baseApiUrl } = props.data;
  console.log(deviceType);
  console.log(baseApiUrl);
  return (
    <div className="container">
      <main>
        <Card>
          <Image id="GVG_096" clip />
          <Frame />
          <Cost fontFamily="Belwe">4</Cost>
          <Race fontFamily="Belwe">Mech</Race>
          <Health fontFamily="Belwe">3</Health>
          <Strength fontFamily="Belwe">4</Strength>
          <Rarity id="common" />
          <Title fontFamily="Belwe" flow>
            Piloted Shredder
          </Title>
          <Set id="gvg" />
          <Text rich>
            {"<b>Deathrattle:</b> Summon a random 2-Cost minion."}
          </Text>
        </Card>
        
        <DndProvider
          backend={deviceType === "desktop" ? HTML5Backend : TouchBackend}
        >
          <Board />
        </DndProvider>
        {user && (
          <div>
            {"User ID: "}
            {user.id}
          </div>
        )}
      </main>
    </div>
  );
}
