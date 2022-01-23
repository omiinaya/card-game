import CardCreate from '../cardCreate/CardCreate'
import Board from '../game/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

export default function Home(props) {
  const { user, origin, deviceType } = props.data;
  console.log(deviceType)
  return (
    <div className="container">
      <main>
        <h1 className="title">Hello world!</h1>
        <CardCreate />
        <DndProvider backend={deviceType==='desktop' ? HTML5Backend : TouchBackend}>
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