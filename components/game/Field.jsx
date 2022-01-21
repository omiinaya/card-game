import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const style = {
    height: '250px',
    width: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    zIndex: 5
};
export const Field = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: () => ({ name: 'Field' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }
    return (
        <div ref={drop} role={'Field'} style={{ ...style, backgroundColor }}>
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
    );
}

export default Field