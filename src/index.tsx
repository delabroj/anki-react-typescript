import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

ReactDOM.render(<App />, document.getElementById('root'));
