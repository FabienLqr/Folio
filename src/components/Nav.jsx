import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/me">Me</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
