import { HandCard } from './HandCard';

export const Hand = (props) => {
    return (
        <div style={{
            margin: '0 auto',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '255px',
            margin: '0 !important',
            bottom: 0
        }}>
            {props.cards.map((card, index) => (
                <div className="generated-hand-card" key={card.cardName + index}>
                    <HandCard
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
            ))}
        </div>
    )
}

export default Hand