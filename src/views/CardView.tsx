import React from 'react';

const CardView = (props: Card) => {
    return (<li>{props.text} | {props.author} @ {props.timestamp}</li>)
}
export default CardView;
