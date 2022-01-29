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
    card,
    playCard
}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.HANDCARD,
        item: { id, card },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                playCard(item.id)
                console.log(`You dropped ${item.card.cardName} into ${dropResult.name}!`);
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
            data-testid={`handcard-${card.cardName}`}
            onClick={() => {
                console.log(id)
            }}>
            <CardCard
                id={id}
                cardName={card.cardName}
                cardImage={card.cardImage}
                cardRarity={card.cardRarity}
                cardType={card.cardType}
                cardSubType={card.cardSubType}
                cardDesc={card.cardDesc}
                typeImage={card.typeImage}
                cardATK={card.cardATK}
                cardDEF={card.cardDEF}
            />
        </div>
    );
};
