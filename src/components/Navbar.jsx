import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="./news.png" className="logo" alt="" />
          </a>
          <div className="navbar-collapse nav-bar" id="navbarTogglerDemo03">
            <ul className="navbar-nav navcont me-auto mb-2 mb-lg-0">
              <li className="nav-item navele">
                <a className="nav-link active" aria-current="page" href="#">
                  Stories
                </a>
              </li>
              <li className="nav-item navele">
                <a className="nav-link active" aria-current="page" href="#">
                  Videos
                </a>
              </li>
              <li className="nav-item navele">
                <a className="nav-link active" aria-current="page" href="#">
                  Companies
                </a>
              </li>
              <li className="nav-item navele">
                <a className="nav-link active" aria-current="page" href="#">
                  Country
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
