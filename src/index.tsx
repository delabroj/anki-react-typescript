import * as React from 'react';
import ReactDOM from 'react-dom';

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
