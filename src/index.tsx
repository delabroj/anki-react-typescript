import * as React from 'react';
import ReactDOM from 'react-dom';

interface State {
    count: number;
}

const initialState: State = { count: 0 };

const reducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.Increment:
            return { count: state.count + action.payload.count };
        case ActionType.Decrement:
            return { count: state.count - action.payload.count };
    }
};

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
