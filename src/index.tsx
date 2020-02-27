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

const reducer: React.Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case ActionType.Increment:
            return { count: state.count + action.payload.count };
        case ActionType.Decrement:
            return { count: state.count - action.payload.count };
    }
};

const App = () => {
    return (
        <div>
            <div>Count: 0</div>
            <button>+5</button>
            <button>+1</button>
            <button>-1</button>
            <button>-5</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
