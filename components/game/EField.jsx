import Enemy from './Enemy';

export const EField = (props) => {
    const style = {
        height: '265px',
        width: '100%',
    }
    return (

        <div style={{ ...style }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div className="cards">
                    {props.cards.map((card, index) => (
                        <div key={"efield" + card.cardName + index}>
                            <div className="generated-efield-card">
                                <Enemy card={card} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EField