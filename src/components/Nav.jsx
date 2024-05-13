import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
