import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const style = {
    height: '265px',
    width: '175px',
    zIndex: 10,
    position: 'absolute',
    bottom: '530px',
    color: 'white'
}
export const Enemy = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.FIELDCARD,
        drop: () => ({ name: 'Enemy' }),
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
        <div ref={drop} role={'Enemy'} style={{ ...style, backgroundColor }}>
            <div style={{
                margin: '0 auto',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
            }}>
                test
            </div>
        </div>
    );
}

export default Enemy