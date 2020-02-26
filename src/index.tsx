import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    const [count, setCount] = React.useState<undefined | number>(undefined);
    return <button onClick={() => setCount(count ? count + 1 : 1)}>{count ? count : 'Start'}</button>;
};

ReactDOM.render(<App />, document.getElementById('root'));
