import React, {FormEventHandler, useState} from 'react';

interface FormProps {
    onSubmit(text: string): void
}

const CardForm = (props: FormProps) => {
    const [text, setText] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if(text !== ''){
            props.onSubmit(text);
            setError(null);
        } else {
            setError('Am i a joke to you?')
        }
    }

    return <form onSubmit={handleSubmit}>
        <label>Card text</label>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="ex: dance my little puppet! DANCE!" />
        {error && <span>{error}</span>}
        <button>Add the card!</button>
    </form>
}

export default CardForm
