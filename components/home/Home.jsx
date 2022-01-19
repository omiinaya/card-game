import CardCreate from '../cardCreate/CardCreate'
//import PlayerHand from '../playerHand/PlayerHand'
import PlayerHand from '../board/PlayerHand'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Home(props) {
  const { user, origin } = props.data;
  console.log(user);
  return (
    <div className="container">
      <main>
        <h1 className="title">Hello world!</h1>
        <CardCreate />
        <DndProvider backend={HTML5Backend}>
        <PlayerHand />
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
