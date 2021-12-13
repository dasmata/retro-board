import React from "react";

export interface AppProps {
    entity: string
}

const App = (props: AppProps) => {
    return (<h1>Hello {props.entity}!</h1>);
}

export default App
