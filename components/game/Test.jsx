import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { cardCard } from '../cardCard/CardCard';

const style = {
  height: "250px",
  border: "1px dotted black",
};

export default function Test(props) {
  console.log(props.cards)
  //console.log('test')
  const [{ isOver, canDrop, result }, drop] = useDrop(() => ({
    accept: ItemTypes.HANDCARD,
    canDrop: (monitor) => {
      //console.log(monitor)
      return true
    },
    drop: (monitor) => {
      return ({ name: "Test" })
    },
    hover: (item, monitor) => {
      //console.log(item)
      //console.log(monitor)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),

    }),
  }), [])

  return (
    <div ref={drop} role="Test" style={{
      position: 'relative',
      width: '100%',
      height: '100%',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>test</div>
      <div style={{ ...style, display: 'flex', justifyContent: 'center' }}>
        {props.cards.map((card, index) => (
          <div
            style={{
              height: '150px',
              width: '150px'
            }}
          >x</div>
        ))}
      </div>
    </div>
  )
}
