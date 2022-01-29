import { HandCard } from './HandCard';

export const Hand = (props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '255px'
        }}>
            {props.cards.map((card, index) => (
                <div className="generated-hand-card" key={'hand' + card.cardName + index}>
                    <HandCard
                        id={card.id}
                        card={card}
                        playCard={props.playCard}
                    />
                </div>
            ))}
        </div>
    )
}

export default Hand