import Board from "../game/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Test from './Test';

export default function Home(props) {
  const { user, origin, deviceType, baseApiUrl } = props.data;
  //console.log(deviceType);
  //console.log(baseApiUrl);
  return (
    <div className="container">
      <main>    
        <DndProvider backend={deviceType === "desktop" ? HTML5Backend : TouchBackend}>
          {/*<Board />*/}
          <Test />
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
