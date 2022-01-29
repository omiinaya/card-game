import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import CardCard from '../cardCard/CardCard';

const style = {
    //border: '1px dashed gray',
    cursor: 'move',
    width: '280px',
    zIndex: 10
};
export const HandCard = function HandCard({
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
        type: ItemTypes.HANDCARD,
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
        <div
            ref={drag}
            role="HandCard"
            style={{ ...style, opacity }}
            data-testid={`handcard-${cardName}`}
            onClick={() => {
                console.log(id)
            }}>
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
