

import { Link, NavLink } from "react-router-dom";
import home from "../assets/home-page-svgrepo-com.svg";
import dashboard from "../assets/dashboard-layout-svgrepo-com.svg";
import { useEffect, useState } from "react";

function NavBar() {
  const [color, setColor] = useState("navbar-transparent");
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  return (
    <nav className={"navbar navbar-expand-lg sticky-top " + color}>
      <div className="container-fluid align-items-center">
        <Link className="navbar-brand mx-auto text-white-50" to="/">
          My Events
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item my-2 mx-4">
              <NavLink className="nav-link active" aria-current="page" to="/">
                <img src={home} style={{ height: "1.5rem" }} />
              </NavLink>
            </li>
            <li className="nav-item my-2 mx-4">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                <img src={dashboard} style={{ height: "1.5rem" }} />
              </NavLink>
            </li>
          </ul>
          <ul className="d-flex my-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/login"
              >
                <button
                  className="btn btn-outline-primary text-white-50"
                  type="submit"
                >
                  Login
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
