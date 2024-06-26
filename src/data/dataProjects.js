import DragonFlyImg from "../assets/Imgages/DragonFly.png";
import MapImg from "../assets/Imgages/Map.png";
import StarWildImg from "../assets/Imgages/StarWild.png";
import ECFImg from "../assets/Imgages/ecf.png";
import sahImg from "../assets/Imgages/streetarthunter.png";

import loadImg from "../assets/Imgages/load.jpg";

const projects = [
  {
    name: "Project 1: DragonFly",
    type: "school",
    img: DragonFlyImg,
    desc: "DragonFly est un site qui sert a afficher l'heure de plusieurs villes du monde en simultane.",
    repo: "https://github.com/VncPsq/DragonFly",
    deploy: "https://vncpsq.github.io/DragonFly/landing/",
  },
  {
    name: "Project 2: Star-Wild",
    type: "school",
    img: StarWildImg,
    desc: "Star-Wild est un site a des vus pedagogiques sur le system solaire utilisant une API",
    repo: "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P2-Team3",
    deploy: "https://star-wild.netlify.app/",
  },
  {
    name: "Project 3: Street Art Hunter",
    type: "school",
    img: sahImg,
    desc: "Sreet Art Hunter est un site qui a pour objectif de faire bouger les jeunes qui sont trop sur leur telephone en leur faisant decouvrir l'art a travers le stret art.",
    repo: "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P3-StreetArtHunter",
    deploy: "",
  },
  {
    name: "Project 4: Protojam",
    type: "school",
    img: ECFImg,
    desc: "Le protojam appele echappee celebrement fantasque est un projet repondant au sujet nature est deconnexion qui propose des voyages dans la nature avec une celibrite",
    repo: "https://github.com/WildCodeSchool-2024-02/wcs-Protojam-goupeA",
    deploy: "https://echappee-celebrement-fantasque.netlify.app/",
  },
  {
    name: "Project 5: Metallica",
    type: "perso",
    img: loadImg,
    desc: "Le projet Metallica est un projet qui sert a regrouper differentes informations sur le groupe, dont les paroles des chansons ect.",
    repo: "",
    deploy: "",
  },
  {
    name: "Project 6: Map",
    type: "perso",
    img: MapImg,
    desc: "C'est un projet test pour afficher une map avec react",
    repo: "https://github.com/FabienLqr/TestMap",
    deploy: "https://fabs-testmap.netlify.app/",
  },
];

export default projects;
