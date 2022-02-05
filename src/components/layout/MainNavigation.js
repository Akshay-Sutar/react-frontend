import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          My Store
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
                Hot
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Men
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-2">
                <span className="fa fa-user"></span>
              </li>
              <li className="nav-item m-2">
                <span className="fa fa-heart"></span>
              </li>
              <li className="nav-item m-2">
                <span className="fa fa-shopping-cart"></span>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
