import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
//import Rte from 'react-rte';


const Btr = React.memo((props) => {
  return <button onClick={props.onClick}>Click Me</button>
});

const Wrap = () => {
  console.log('wrap');
  return <p>wrap</p>
}

const Ghj = () => {
  const [count, setCount] = useState(1);
  const onClick = useCallback(() => setCount(count => count + 1), []);
  return (

<>
    <Btr onClick={onClick}/>
    <Wrap />
<p>{count}</p>
</>

    )
};


function App() {
    //const [rteValue, setRteValue] = useState(Rte.createValueFromString('', 'html'));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<Ghj />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}





export default App;
