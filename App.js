// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  //https://reactjs.org/docs/hooks-reference.html#usestate
  //https://codegino.com/blog/react-setstate-callback-function
  const handleCounter = () => {
    setTimeout(
      () => { setCounter((prevCounter) => prevCounter + 1) },
      0);
  }

  return (
    <div style={{ padding: '100px' }}>
      <h2>{counter}</h2>
      <button onClick={handleCounter}>Increase</button>
    </div>
  );
}

export default App;
