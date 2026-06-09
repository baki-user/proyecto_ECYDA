import "../components/comic.css"
import { Header } from "../components/Header";

export const Comic = ({ headerColor, header2Color, edificios }) => {
    return (
        <div className="Header ">

            {/* <nav className={`navbar navbar-expand-lg ${headerColor}`} data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./public/logo-blanco.png" alt="Bootstrap" width="80" height="80" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-4">
                            <li className="nav-item navbar-light ">
                                <a className="nav-link" href="#">Acerca de</a>
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
            </nav> */}

            <Header
                            headerColor="bg-green"
                            header2Color="bg-lightColor"
                        />


            <div>

                <div className={`${edificios}`}>
                    <section className="hero container" />

                    <div className="hero-top text-center m-auto p-4 " style={{ maxWidth: "660px" }}>
                        
                        <h1>EL CALENTAMIENTO GLOBAL Y LA INDUSTRALIZACION</h1>
                        <p className="subtitle">
                            Un estudiante conocido como Ossian debe enfrentarse contra un nuevo riesgo para la sociedad, Asher,
                            un hombre planta que ha acabado con toda la humanidad sin sentir nada de remordimiento o miedo,
                            pero todavía hay un sobreviviente y él no lo sabe.
                        </p>
                    </div>
                </div>

                <section className="container mt-5 pt-5" style={{ marginTop: "120px" }}>
                    <div className="row">
                        <div className="card-body text-center " >
                            <p>REFERENTES VISUALES  </p>
                        </div>
                        <div className="card-body text-center " >
                            <p>Para desarollar nuestro proyecto de un comic digital interactivo, tomamos algunos referentes visuales.  </p>
                        </div>
                        <div className="col ">
                            <div className="card m-auto  border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto" width="250" src="../portada1.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center">Hijos de los hombres(2006)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card m-auto  border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto p-2" width="260" src="../portada2.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center">Love(2011)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card m-auto  border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto p-2" width="260" src="../portada3.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center">Little Shop of Horrors(1986)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container mt-4">
                <div className="card-body text-center " >
                    <p>PERSONAJES.k</p>
                </div>
                <div className="row justify-content-center gap-4">

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <img
                                src="../asher.gif"
                                className="card-img-top"
                                alt="Asher"
                            />
                            <div className="card-body text-center">
                                <p>Asher.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <img
                                src="../osslan.gif"
                                className="card-img-top"
                                alt="Ossian"
                            />
                            <div className="card-body text-center">
                                <p>Ossian.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="page d-flex justify-content-between ">
                <div className="side-bar"></div>
                <div className="content-box">
                    <span className="coming-text">COMING SOON</span>
                </div>
                <div className="side-bar right"></div>
            </div>


            <div className="container my-5 p-4 rounded shadow-sm col-8 col-lg-4 "
                style={{
                    backgroundColor: "#e8d3b7",
                    width: "100%"
                }}>
                <h5 className="text-center mb-2 fw-bold">
                    INSTRUCCIONES PARA EL CÓMIC
                </h5>

                <div className="row text-center">

                    <div className="col-12 col-lg-4">
                        <div className="p-3 border rounded bg-light">
                            <img src="../mesa.gif" width="60" className="mb-2" />
                            <p className="fw-semibold">Instruccion 2</p>
                            <p>Comience a leer el comic, es libre de interactuar con el raton.</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="p-3 border rounded bg-light">
                            <img src="../mano.gif" width="60" className="mb-2" />
                            <p className="fw-semibold">Instruccion 1</p>
                            <p>Ingrese al comic, desplazandose hacia abajo.</p>
                        </div>
                    </div>

                    <div className="col- col-lg-4">
                        <div className="p-3 border rounded bg-light">
                            <img src="../apagado.gif" width="60" className="mb-2" />
                            <p className="fw-semibold">Instruccion 3</p>
                            <p>El comic cuenta con botones interactivos, presionalos.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-5 p-4 border rounded shadow-sm"
                style={{ maxWidth: "900px" }}>
                <div className="row g-3">
                  
                       <img src="../portada-comic.gif" width="60" className="mb-2" />
                </div>
            </div>
            <>
            <div className={`navbar-expand-lg  ${headerColor}`}>
                <div className="container">
                    <div className="navbar-expand-lg">
                        <div className="row container">
                            <div className="col d-flex flex-column justify-content-center">
                                <div className=" m-auto  border-white d-flex " style={{ width: "23rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <p className="card-text d-flex justify-content-center nav-link">Lineas de atención</p>
                                        <p className="card-text d-flex justify-content-center nav-link">CEL: 320 740 60 79</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column justify-content-center p-4">
                                <div className=" m-auto  border-white d-flex" style={{ width: "23rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center ">
                                        <p className="card-text d-flex justify-content-center nav-link" href="#">ECYDA</p>
                                        <p className="card-text d-flex justify-content-center nav-link" href="#">Horarios</p>
                                        <p className="card-text d-flex justify-content-center nav-link" href="#">Lun - Sab: 7:00 A.M a 5:00 P.M</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column justify-content-center">
                                <div className=" m-auto  border-white d-flex" style={{ width: "23rem" }}>
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <p className="card-text d-flex justify-content-center nav-link" href="#">Ubicación</p>
                                        <p className="card-text d-flex justify-content-center nav-link" href="#">CLL 85b #33-09</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center p-2" width="100%">
                                <img className="" width="25%" src="./social.gif" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </>
        </div>

    );
}