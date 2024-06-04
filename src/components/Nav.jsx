import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
        <Link to="/me">
          <button>Me</button>
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
