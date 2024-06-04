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
      <section className="cnt">
        <h2 className="butSec">
          {count > 100 ? "Incassable" : "Casse le mur"}
        </h2>
        <button onClick={() => setCount((count) => count + 1)}>CLICK!</button>
        <p className="butSec">Tu as clicke sur le boutton {count} fois.</p>
      </section>
      <Footer />
    </>
  );
}

export default App;
