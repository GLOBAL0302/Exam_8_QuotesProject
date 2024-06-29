import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          Home
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex ms-auto gap-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Quotes
              </NavLink>
            </li>
            <span
              style={{ height: '40px', width: '3px' }}
              className="border border-2 bg-light"
            ></span>
            <li className="nav-item">
              <NavLink to="/quoteForm" className="nav-link " aria-current="page">
                Submit new Quotes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
