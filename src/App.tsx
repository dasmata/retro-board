import React from "react";
import withBoardsStorage from "./hoc/withBoardsStorage";
import BoardView from "./views/BoardView";

const Board = withBoardsStorage(BoardView);

const App = () => {
    return (<Board columns={[
        {
            id: 1,
            name: "To improve",
            color: "red"
        },
        {
            id: 2,
            name: "What went well?",
            color: "green"
        },
        {
            id: 3,
            name: "Action Items",
            color: "blue"
        }
    ]} />);
}

export default App
