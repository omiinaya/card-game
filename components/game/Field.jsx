import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import CardCard from '../cardCard/CardCard';

const style = {
    height: '250px',
    width: '100%',
    color: 'white',
    zIndex: 5,
    position: 'absolute',
    bottom: '150px',
}
export const Field = (props) => {
    console.log(props.cards)
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
            <div style={{display: 'flex', justifyContent: 'center'}}>test</div>
            <div style={{
                margin: '0 auto',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '150px'
            }}>
                {props.cards.map((card) => (
                    <div style={{ marginLeft: '20px', marginRight: '20px' }} key={'field' + card.cardName}>
                        <div className="generated-card">
                            <CardCard 
                                cardName={card.cardName} 
                                cardImage={card.cardImage} 

                            />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Field