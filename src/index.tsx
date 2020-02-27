import * as React from 'react';
import ReactDOM from 'react-dom';

enum ActionType {
    Increment = 'increment',
    Decrement = 'decrement',
}

interface State {
    count: number;
}

interface Action {
    type: ActionType;
    payload: {
        count: number;
    };
}

const initialState: State = { count: 0 };

const App = () => {
    const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(reducer, initialState);

    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({ type: ActionType.Increment, payload: { count: 5 } })}>+5</button>
            <button onClick={() => dispatch({ type: ActionType.Increment, payload: { count: 1 } })}>+1</button>
            <button onClick={() => dispatch({ type: ActionType.Decrement, payload: { count: 1 } })}>-1</button>
            <button onClick={() => dispatch({ type: ActionType.Decrement, payload: { count: 5 } })}>-5</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
