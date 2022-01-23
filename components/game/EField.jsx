import Enemy from './Enemy';

export const EField = (props) => {
    console.log(props)
    const style = {
        height: '265px',
        width: '100%',
        position: 'absolute',
        bottom: '50px',
    }
    return (
        <div style={{ ...style }}>
            <div style={{
                margin: '0 auto',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '100%'
            }}>
                {props.cards.map((card, index) => (
                    <div key={card.cardName + index}>
                        <Enemy card={card}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EField