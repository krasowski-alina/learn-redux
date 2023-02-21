import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
    <h1>COUNTER {count}</h1>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>
    <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
