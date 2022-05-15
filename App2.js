import { useState } from "react";

function App() {

  const user = {
    name: 'John',
    phone: '007'
  };

  const [info, setInfo] = useState(user)

  // const handleInfo = () => setInfo((prev) => ({ ...prev, bio: 'outer space' }))

  // const handleInfo = () => {
  //   setInfo((prev) => {
  //     return (
  //       {
  //         ...prev,
  //         bio: 'outer space'
  //       }
  //     )
  //   })
  // }

  const handleInfo = () => {
    setInfo((prev) => {
      return (
        {
          ...prev,
          bio: 'outer space'
        }
      )
    })
  }


  return (
    <div style={{ padding: '20px' }}>
      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleInfo}>Increase</button>
    </div>
  );
}

export default App
