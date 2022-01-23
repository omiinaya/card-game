import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import FieldCard from './FieldCard';

const style = {
    height: '265px',
    width: '100%'
}
export const Field = (props) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.HANDCARD,
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
                width: '100%',
                height: '100%'
            }}>
                {props.cards.map((card, index) => (
                    <div key={'field' + card.cardName + index}>
                        <div className="generated-field-card">
                            <FieldCard
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