const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Home
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Quotes
              </a>
            </li>
            <span
              style={{ height: '40px', width: '3px' }}
              className="border border-2 bg-light"
            ></span>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Submit new Quotes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
