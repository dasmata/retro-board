import React, {useCallback, useState} from 'react';
import { WithBoardsStorage } from "../hoc/withBoardsStorage";
import ColumnView from './ColumnView';
import CardForm from "./CardForm";

const BoardView = (props: WithBoardsStorage) => {
    const [showForm, setShowForm] = useState(null);

    const handleCardFormSubmit = (text: string) => {
        props.onCardAdd({
            text,
            author: 'Anon.',
            timestamp: "" + new Date().getTime()
        }, showForm)
        setShowForm(null)
    }

    return <div>
        {props.columns.map(column => <ColumnView
            key={column.id}
            {...column}
            loading={props.loading.includes(column.id)}
            onAdd={setShowForm}
        />)}
        {showForm && <CardForm onSubmit={handleCardFormSubmit} />}
    </div>
}

export default BoardView;

