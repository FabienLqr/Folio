import Me from "../components/Me";
import Dev from "../components/Dev";

function Home() {
  return (
    <>
      <section>
        <h2>Qui suis-je?</h2>
        <Me />
      </section>
      <section>
        <h2>Pourquoi je veux devenir dev?</h2>
        <Dev />
      </section>
      <section>
        <h2>Section 3</h2>
        <p>a venir</p>
      </section>
    </>
  );
}

export default Home;
