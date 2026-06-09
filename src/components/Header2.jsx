import "./Header.css"

export const Header2 = ({ headerColor }) => {
  return (
    <div className="Header ">
      <nav className={`navbar navbar-expand-lg  ${headerColor}`} data-bs-theme="dark">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img src="./logo-blanco.png" alt="Bootstrap" width="80" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item navbar-light ">
                <a className="nav-link active" href="#">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Comic interactivo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tienda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quienes somos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
