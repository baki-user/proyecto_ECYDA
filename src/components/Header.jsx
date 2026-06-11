import { Link } from "react-router-dom"
import "./Header.css"

export const Header = ({ headerColor, header2Color }) => {
    return (
        <>
            <div className="Header ">
                <nav className={`navbar navbar-expand-lg  ${headerColor}`} data-bs-theme="dark">
                    <div className="container ">
                        <Link className="navbar-brand" to="/">
                            <img src="./logo-blanco.png" alt="Bootstrap" width="70" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item navbar-light ">
                                    <Link className="nav-link" to="/aboutus" >Acerca de</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/comic">Comic interactivo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/productos">Tienda</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/somos">Quienes somos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={`text-white text-center ${header2Color}`}>Lo normal fue lo primero en morir</div>
            </div>
        </>
    )
}
