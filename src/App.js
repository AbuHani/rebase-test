import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Counter(props) {

  const { value, onDecrement, onIncrement } = props;

  const [counter, setCounter] = useState(value);

  const onDecrementClicked = () => {
    const va = onDecrement()
    setCounter(counter - 1)
  }

  const onIncrementClicked = () => {
    setCounter(counter + 1)
  }


  return (
    <div className="counter">
      <b>{counter}</b>
      <div className="counter-controls">
        <button className="button is-danger is-small" onClick={onDecrementClicked}>-</button>
        <button className="button is-success is-small" onClick={onIncrementClicked} >+</button>
      </div>
    </div>
  );

}


function App() {
  const [data, setData] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 }
  ]);

  return (
    <div>
      {data.map((counter, index) => (
        <Counter
          key={counter.id}
          value={counter.value}
          onDecrement={(counter) => counter - 1}
          onIncrement={(counter) => counter + 1}
        />
      ))}
    </div>
  );
}

export default App;
