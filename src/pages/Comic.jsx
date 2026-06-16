import "../components/comic.css"
import "../stylesheet/InfoCard.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useEffect } from "react"

export const Comic = ({ headerColor, header2Color, edificios }) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible")
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = document.querySelectorAll(".fade-in-scroll")
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="Header">

            <Header
                headerColor="bg-green"
                header2Color="bg-lightColor"
            />

            <div>
                <div className={`${edificios}`}>
                    <section className="hero container" />

                    <div className="hero-top text-center m-auto p-4 mt-4" style={{ maxWidth: "660px" }}>
                        <h1 style={{ fontSize: "2.8rem", color: "#005b15" }}>EL CALENTAMIENTO GLOBAL Y LA INDUSTRALIZACION</h1>
                        <p className="subtitle mt-4" style={{ fontSize: "1.3rem", color: "#4a4a4a" }}>
                            Un estudiante conocido como Ossian debe enfrentarse contra un nuevo riesgo para la sociedad, Asher,
                            un hombre planta que ha acabado con toda la humanidad sin sentir nada de remordimiento o miedo,
                            pero todavía hay un sobreviviente y él no lo sabe
                        </p>
                    </div>
                </div>

                <section className="container mt-5 pt-5" style={{ marginTop: "120px" }}>
                    <div className="row">
                        <div className="card-body text-center mt-4">
                            <p style={{ fontSize: "1.9rem", fontWeight: "bold", color: "#005b15" }}>REFERENTES VISUALES</p>
                        </div>
                        <div className="card-body text-center">
                            <p style={{ fontSize: "1.2rem", color: "#4a4a4a" }}>Para desarrollar nuestro proyecto de un comic digital interactivo, tomamos algunos referentes visuales</p>
                        </div>
                        <div className="col mt-4">
                            <div className="card m-auto border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto logo-hover fade-in-scroll" width="250" height="250" style={{ objectFit: "contain" }} src="../portada1.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center" style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Hijos de los hombres (2006)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col mt-4">
                            <div className="card m-auto border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto logo-hover fade-in-scroll" width="250" height="250" style={{ objectFit: "contain", transitionDelay: "0.2s" }} src="../portada2.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center" style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Love (2011)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col mt-4">
                            <div className="card m-auto border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto logo-hover fade-in-scroll" width="250" height="250" style={{ objectFit: "contain", transitionDelay: "0.4s" }} src="../portada3.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center" style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Little Shop of Horrors (1986)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container mt-4">
                <div className="card-body text-center">
                    <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#005b15" }}>PERSONAJES</p>
                </div>
                <div className="row justify-content-center gap-4">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="../ASHER.png" className="card-img-top fade-in-scroll" alt="Asher" />
                            <div className="card-body text-center">
                                <p style={{ fontSize: "1.2rem", color: "#4a4a4a" }}>Asher</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <img src="../frente Ossian (1).png" className="card-img-top fade-in-scroll" alt="Ossian" style={{ transitionDelay: "0.2s" }} />
                            <div className="card-body text-center">
                                <p style={{ fontSize: "1.2rem", color: "#4a4a4a" }}>Ossian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page d-flex justify-content-between">
                <div className="side-bar" style={{ backgroundColor: "#005b15" }}></div>
                <div className="content-box" style={{ backgroundColor: "#005b15" }}>
                    <video
                        width="100%"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ marginTop: "1rem" }}>
                        <source src="./Teaser ECYDA version final final.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="side-bar right" style={{ backgroundColor: "#005b15" }}></div>
            </div>

            <div className="my-5 p-4 rounded shadow-sm" style={{ backgroundColor: "#e8d3b7", width: "100%" }}>
                <h5 className="text-center mb-2 fw-bold" style={{ fontSize: "1.5rem", color: "#588d65" }}>
                    INSTRUCCIONES PARA EL CÓMIC
                </h5>

                <div className="row text-center">

                    <div className="col-12 col-lg-4">
                        <img src="../click.png" width="80" height="80" style={{ objectFit: "contain" }} className="mb-2 logo-hover fade-in-scroll" />
                        <p className="fw-semibold" style={{ fontSize: "1.2rem", color: "#78a783" }}>Instruccion 1</p>
                        <p style={{ fontSize: "1.1rem", color: "rgb(75, 144, 91)" }}>Ingrese al comic, desplazandose hacia abajo</p>
                    </div>

                    <div className="col-12 col-lg-4 mt-4">
                        <img src="../libroo.png" width="80" height="80" style={{ objectFit: "contain", transitionDelay: "0.2s" }} className="mb-2 logo-hover fade-in-scroll" />
                        <p className="fw-semibold" style={{ fontSize: "1.2rem", color: "#78a783" }}>Instruccion 2</p>
                        <p style={{ fontSize: "1.1rem", color: "rgb(75, 144, 91)" }}>Comience a leer el comic, es libre de interactuar con el raton</p>
                    </div>

                    <div className="col-12 col-lg-4">
                        <img src="../apagado.png" width="80" height="80" style={{ objectFit: "contain", transitionDelay: "0.4s" }} className="mb-2 logo-hover fade-in-scroll" />
                        <p className="fw-semibold" style={{ fontSize: "1.2rem", color: "#78a783" }}>Instruccion 3</p>
                        <p style={{ fontSize: "1.1rem", color: "rgb(75, 144, 91)" }}>El comic cuenta con botones interactivos, presionalos</p>
                    </div>

                </div>
            </div>

            <div className="container my-5 p-4 border rounded shadow-sm" style={{ maxWidth: "900px" }}>
                <div className="row g-3">
                    <img src="../portada-comic.gif" width="60" className="mb-2 fade-in-scroll" />
                </div>
            </div>

            <Footer headerColor="bg-green" />

        </div>
    );
}