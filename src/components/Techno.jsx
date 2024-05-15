import tabTechno from "../data/dataTechno";

function Techno() {
  return (
    <>
      <ul>
        {tabTechno.map((oneTechno) => (
          <li key={oneTechno.name}>
            <img src={oneTechno.svgImg} className="svgImg" />
            {oneTechno.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Techno;
