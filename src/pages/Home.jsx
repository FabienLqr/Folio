import Me from "../components/Me";
import Dev from "../components/Dev";
import Techno from "../components/Techno";

function Home() {
  return (
    <>
      <section className="project">
        <h2>Qui suis-je?</h2>
        <Me />
      </section>
      <section className="project">
        <h2>Pourquoi je veux devenir dev?</h2>
        <Dev />
      </section>
      <section className="project">
        <h2>Quels sont les technos que j&apos;utilise?</h2>
        <Techno />
      </section>
    </>
  );
}

export default Home;
