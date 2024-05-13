import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Portfolio</h1>
      </header>
      <Nav />
      <button onClick={() => setCount((count) => count + 1)}>CLICK!</button>
      <p>The button has been click {count} times.</p>
    </>
  );
}

export default App;
