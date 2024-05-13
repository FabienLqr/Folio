import bbcode from "../assets/Imgages/bbcodesExemple.png";

function Dev() {
  return (
    <>
      <h3>D&apos;ou vient l&apos;idee de devenir devoloppeur?</h3>
      <p>
        Ma premiere immersion dans le monde du devoloppement vient d&apos;un
        petit jeu, nomme Les Vengeurs. Bien que de but en blanc le jeu ne
        s&apos;approche pas du code il existe dans les forums du jeu la
        possibilite de faire du &quot;bbcodes&quot;, qui est une forme tres
        simplifier de code permettant de styliser son message et de faire
        quelques liens.
        <figure>
          <img
            src={bbcode}
            alt="image contenant du code sous forme de bbcode"
          />
          <figcaption>Voici ci dessus un exemple de bbcode</figcaption>
        </figure>
      </p>
      <h3>Et apres?</h3>
      <p>
        Suite a la curiosite qu&apos;a fait naitre le bbcode j&apos;ai regarde
        petit a petit le HTML et le CSS tout doucement, comprenant des elements.
        Suite a cela j&apos;ai pris une option au lycee qui m&apos;a fait
        devolopper les premiere bases des codes HTML et CSS pour creer mes
        premiers petits sites, sans grande complexite. Apres le lycee je suis
        rentre en premiere annee de licence IEEEA (Informatique, Electronique,
        Energie Electrique, Automatique) suivit d&apos;une deuxieme annee en
        licence Informatique, qui fut stopper en court de route.
      </p>
      <p>
        C&apos;est avec ces deux annees de licence que j&apos;ai travailler ma
        methodologie de travail pour resoudre mes problemes de
        fonction/algorithme. J&apos;ai aussi vu mon premier langage de haut
        niveau, le C#. Celui ci n&apos;ayant pas ete travailler depuis quelques
        annees je le considere comme non maitrise et a revoir completement. Nous
        voyons aussi des langages plus proches de la machine et donc beaucoup
        plus abstrait, ainsi que le binaire.
      </p>
      <p>
        Apres avoir quitter ma deuxieme annees de licence je me suis attele a un
        travail alimentaire. Apres plusieurs annees dans la meme entreprise
        l&apos;envie de revenir sur le developpement m&apos;a pousse a chercher
        un moyen de revenir dans le monde du dev. J&apos;ai trouve la formation
        de la Wild Code School dans le developpement web avec JavaScript et
        React, et j&apos;ai saisis l&apos;opportunite qui c&apos;est offerte a
        moi.
      </p>
    </>
  );
}

export default Dev;
