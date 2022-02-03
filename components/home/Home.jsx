import Game from "../cardGame/Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

export default function Home(props) {
  const { user, origin, deviceType, baseApiUrl } = props.data;
  console.log(user);
  return (
    <div className="gameBackground">
      <div className="gameContainer">
        <DndProvider backend={deviceType === "desktop" ? HTML5Backend : TouchBackend}>
          {<Game />}
        </DndProvider>
      </div>
    </div>
  );
}
