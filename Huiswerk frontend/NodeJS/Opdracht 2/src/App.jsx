import Greeting from "./Greeting";
import { useState } from "react";


function App() {
  const [count, setcount] = useState(0);

  return (
  <div>
    <h1>Mijn react-app met Vite</h1>
    <Greeting name="Luuk"/>

    <button onClick={() => setcount(count + 1)}>
      Je hebt {count} keer geklikt
    </button>
  </div>
  );
}

export default App;
