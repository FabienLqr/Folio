import Me from "../components/Me";
import Dev from "../components/Dev";
import Techno from "../components/Techno";

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
        <h2>Quels sont les techno que j&apos;utilise?</h2>
        <Techno />
      </section>
    </>
  );
}

export default Home;
