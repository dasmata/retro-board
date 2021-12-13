import React from 'react';
import CardView from './CardView';

interface ColumnProps extends Column {
    loading: boolean,
    onAdd(id: number): void
}

const ColumnView = (props: ColumnProps) => {
    const handleAddCard = () => {
        props.onAdd(props.id)
    }
    return (<div>
        <h2>Column {props.name}</h2>
        {
            props.loading ?
                <div>Loading...</div> :
                (props.cards?.length ?
                    <ul>
                        {props.cards.map(el => <CardView key={el.timestamp} {...el} />)}
                    </ul> :
                    <div>No card. Be the first to add one</div>)
        }
        <footer>
            <button onClick={handleAddCard}> + Add card</button>
        </footer>
    </div>)
}


export default React.memo(ColumnView);
