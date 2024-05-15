import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Portfolio</h1>
      </header>
      <Nav />
      <section>
        <button onClick={() => setCount((count) => count + 1)}>CLICK!</button>
        <p>The button has been click {count} times.</p>
      </section>
      <Footer />
    </>
  );
}

export default App;
