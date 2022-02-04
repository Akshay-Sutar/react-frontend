import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  isAuthenticated = false;
  if (isAuthenticated) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">
            My App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <div className="dropdown">
                <button
                  className="btn btn-info dropdown-toggle"
                  href="#"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <Link className="dropdown-item" to="/addItem">
                      Add Item
                    </Link>
                  </li>
                </ul>
                <button className="btn btn-primary">Logout</button>
              </div>
            </span>
          </div>
        </div>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default MainNavigation;
