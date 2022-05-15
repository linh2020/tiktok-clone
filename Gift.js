import { useState } from "react";

function App() {

  const gifts = ['CPU', 'VGA', 'Memory'];
  const [gift, setGift] = useState("Waiting")

  const handleGift = () => {
    const index = Math.floor(Math.random() * 3);
    setGift(() => gifts[index]);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{gift || 'Waiting!'}</h2>
      <button onClick={handleGift}> Get a gift</button>
    </div>
  );
}

export default App

// import { useState } from "react";

// function App() {

//   const gifts = ['CPU', 'VGA', 'Memory'];

//   const [gift, setGift] = useState("Waiting")

//   const randomNumber = () => Math.floor(Math.random() * 3);

//   const handleGift = () => {
//     setGift(() => {
//       return gifts[randomNumber()];
//     });
//   }


//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{gift}</h2>
//       <button onClick={handleGift}> Get a gift</button>
//     </div>
//   );
// }

// export default App
