import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

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
    cardMonster,
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
        <div ref={drag} role="Card" style={{ ...style, opacity }} data-testid={`card-${cardName}`} onClick={()=> {console.log(id)}}>
            <div>
                <link
                    href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
                    rel="stylesheet"
                />
                <div id="cardContainer">
                    <img
                        id="cardTemplate"
                        src="https://i.ibb.co/mG6jvpR/monster-normal.png"
                    />
                    <img
                        id="cardFace"
                        src={cardImage} />
                    <img
                        id="starLevel"
                        src="https://i.ibb.co/M1bYC6V/star.png"
                    />
                    <div id="cardTitle">{cardName}</div>
                    <img id="cardType" src={typeImage} />
                    <h4 id="monsterType">[{cardMonster}]</h4>
                    <div id="monsterDescription">{cardDesc}</div>
                    <div id="monsterAtk">{cardAtk}</div>
                    <div id="monsterDef">{cardDef}</div>
                </div>
            </div>
        </div>);
};