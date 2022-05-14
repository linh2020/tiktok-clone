// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  //https://reactjs.org/docs/hooks-reference.html#usestate
  //https://codegino.com/blog/react-setstate-callback-function

  // const handleCounter = () => {
  //   setTimeout(
  //     () => { setCounter((prevCounter) => prevCounter + 1) },
  //     0);
  // }
  const handleCounter = () => {
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // console.log(counter);
  };

  //https://medium.com/@sanjeewafern/perform-an-immediate-action-after-setting-state-on-a-state-variable-with-react-functional-component-e9e1526f655a
  useEffect(() => { console.log(counter); })

  return (
    <div style={{ padding: '100px' }}>
      <h2>{counter}</h2>
      <button onClick={handleCounter}>Increase</button>
    </div>
  );
}

export default App;
