import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import CardCard from '../cardCard/CardCard';

const style = {
    height: '450px',
    width: '100%',
    zIndex: 5,
    position: 'absolute',
    bottom: '250px',
}
export const Field = (props) => {
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
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'white'
            }}>
                playable area
            </div>
            <div style={{
                margin: '0 auto',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '250px'
            }}>
                {props.cards.map((card) => (
                    <div style={{ marginLeft: '10px', marginRight: '10px' }} key={'field' + card.cardName}>
                        <div className="generated-card">
                            <CardCard
                                id={card.id}
                                cardName={card.cardName}
                                cardImage={card.cardImage}
                                cardRarity={card.cardRarity}
                                cardType={card.cardType}
                                typeImage={card.typeImage}
                                cardDesc={card.cardDesc}
                                cardSubType={card.cardSubType}
                                cardAtk={card.cardATK}
                                cardDef={card.cardDEF}
                                playCard={props.playCard}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Field