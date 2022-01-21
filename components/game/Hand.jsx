import { Card } from './Card';

export const Hand = (props) => {
    return (
        <div className="cards">
            {props.cards.map((card, index) => (
                <div key={card.cardName + index}>
                    <div className="generated-card">
                        <Card
                            id={card.id}
                            cardName={card.cardName}
                            cardImage={card.cardImage}
                            cardRarity={card.cardRarity}
                            cardType={card.cardType}
                            typeImage={card.typeImage}
                            cardDesc={card.cardDesc}
                            cardMonster={card.cardMonster}
                            cardAtk={card.cardATK}
                            cardDef={card.cardDEF}
                            playCard={props.playCard}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Hand