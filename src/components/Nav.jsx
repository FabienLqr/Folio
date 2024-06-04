import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">
          <button>Acceuil</button>
        </Link>
        <Link to="/projects">
          <button>Projets</button>
        </Link>
        <Link to="/me">
          <button>Moi</button>
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
