import React, {Dispatch, FunctionComponent, useEffect, useLayoutEffect, useReducer} from "react";

export interface WithBoardsStorage {
    onChange?(data: Column[]): void,
    columns?: Column[],
    loading?: number[]
    onCardAdd(data: Card, columnId: number):void
}

interface StateInterface {
    loading: number[],
    columns: Column[],
    error?: Error,
    success?: boolean
}

interface Action {
    type: string,
    payload?: any
}

const reducer = (state: StateInterface, action: Action): StateInterface => {
    switch(action.type){
        case 'loading':
            return {...state, loading: action.payload}
        case 'init':
            return {...state, loading: [], columns: action.payload}
        case 'addCard':
            return {
                ...state,
                loading: [],
                columns: state.columns.map(column => {
                    if(column.id !== action.payload.columnId){
                        return column;
                    }
                    return {...column, cards: [...(column.cards || []), action.payload.card]}
                })
            }
    }
    return state
}

const initAction = (dispatch: Dispatch<Action>, columns: Column[]) => {
    dispatch({
        type: 'loading',
        payload: columns.map(el => el.id)
    })
    setTimeout(() => {
        dispatch({
            type: 'init',
            payload: columns.map((el: Column, idx: number) => {
                const column = {...el}
                if(idx === 0){
                    column.cards = [{
                        text: 'Test card',
                        author: 'Anon.',
                        timestamp: 'now'
                    }]
                }
                return column;
            })
        })
    }, 2000)
}

const addCardAction = (dispatch: Dispatch<Action>, card: Card, columnId: number) => {
    dispatch({
        type: 'loading',
        payload: [columnId]
    });
    setTimeout(() => {
        dispatch({
            type: 'addCard',
            payload: {
                columnId,
                card
            }
        })
    }, 2000)

}

const withBoardsStorage = (Component: React.ComponentType<WithBoardsStorage>): FunctionComponent<BoardProps> => {
    const displayName = Component.displayName || Component.name || 'Component';

    const ComponentWithBoardsStorage =  (props: BoardProps) => {
        const [state, dispatch] = useReducer(reducer, {
            loading: [],
            columns: []
        })

        useEffect(() => {
            initAction(dispatch, props.columns)
        }, [])

        const handleCardAdd = (card: Card, columnId: number) => {
            addCardAction(dispatch, card, columnId)
        }

        return <Component
            columns={[...state.columns]}
            onChange={(data: Column[]) => {
                return;
            }}
            loading={state.loading}
            onCardAdd={handleCardAdd}
        />
    }

    ComponentWithBoardsStorage.displayName = `widthBoardsStorage(${displayName})`
    return ComponentWithBoardsStorage
}

export default withBoardsStorage
