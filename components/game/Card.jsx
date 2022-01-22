import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import CardCard from '../cardCard/CardCard';

const style = {
    border: '1px dashed gray',
    cursor: 'move',
    zIndex: 10
};
export const Card = function Card({
    id,
    cardName,
    cardImage,
    cardRarity,
    cardType,
    cardSubType,
    cardDesc,
    typeImage,
    cardAtk,
    cardDef,
    playCard
}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { id, cardName },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                playCard(item.id)
                console.log(`You dropped ${item.cardName} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    const opacity = isDragging ? 0.4 : 1;
    return (
        <div ref={drag} role="Card" style={{ ...style, opacity }} data-testid={`card-${cardName}`} onClick={() => { console.log(id) }}>
            <CardCard
                id={id}
                cardName={cardName}
                cardImage={cardImage}
                cardRarity={cardRarity}
                cardType={cardType}
                cardSubType={cardSubType}
                cardDesc={cardDesc}
                typeImage={typeImage}
                cardAtk={cardAtk}
                cardDef={cardDef}
            />
        </div>
    );
};
