import "../components/comic.css"
import "../stylesheet/InfoCard.css"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import video from "../Teaser-ECYDA-version-final-final.webm"

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
                        <h1 style={{ fontSize: "2.8rem", color: "#005b15" }}>El calentamiento global y la industrialización</h1>
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
                            <p style={{ fontSize: "1.9rem", fontWeight: "bold", color: "#005b15" }}>Referentes visuales</p>
                        </div>
                        <div className="card-body text-center">
                            <p style={{ fontSize: "1.2rem", color: "#4a4a4a" }}>Para desarrollar nuestro proyecto de un comic digital interactivo, tomamos algunos referentes visuales</p>
                        </div>

                        <div className="col mt-4">
                            <div className="card m-auto border-white text-center" style={{ width: "23rem", height: "30rem" }}>
                                <a href="https://es.wikipedia.org/wiki/Children_of_Men" target="_blank" rel="noopener noreferrer"
                                    style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                    <img className="img4 logo-hover fade-in-scroll" width="250" height="250"
                                        style={{ objectFit: "contain" }} src="../portada1.gif" alt="Hijos de los hombres" />
                                    <div className="card-body text-center">
                                        <p className="card-text" style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Hijos de los hombres (2006)</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col mt-4">
                            <div className="card m-auto border-white text-center" style={{ width: "23rem", height: "30rem" }}>
                                <a href="https://es.wikipedia.org/wiki/Love_(película_de_2011)" target="_blank" rel="noopener noreferrer"
                                    style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                    <img className="img4 logo-hover fade-in-scroll" width="250" height="250"
                                        style={{ objectFit: "contain", transitionDelay: "0.2s" }} src="../portada2.gif" alt="Love" />
                                    <div className="card-body text-center">
                                        <p className="card-text" style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Love (2011)</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col mt-4">
                            <div className="card m-auto border-white text-center" style={{ width: "23rem", height: "30rem" }}>
                                <a href="https://en.wikipedia.org/wiki/Little_Shop_of_Horrors_(1986_film)" target="_blank" rel="noopener noreferrer"
                                    style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                    <img className="img4 logo-hover fade-in-scroll" width="250" height="250"
                                        style={{ objectFit: "contain", transitionDelay: "0.4s" }} src="../portada3.gif" alt="Little Shop of Horrors" />
                                    <div className="card-body text-center">
                                        <p className="card-text" style={{ fontSize: "1.1rem", color: "#4a4a4a" }}>Little Shop of Horrors (1986)</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container mt-4">
                <div className="card-body text-center">
                    <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#005b15" }}>Personajes principales</p>
                </div>
                <div className="row justify-content-center g-4">

                    <div className="col-auto">
                        <div className="card" style={{ width: "200px", height: "420px" }}>
                            <a href="https://drive.google.com/file/d/1IWTCtQX-3VX8khEh3JdxT8XpQ8ZgUevu/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                <div className="img-overlay-wrapper" style={{ height: "360px" }}>
                                    <img src="../ASHER.png" className="card-img-top fade-in-scroll" alt="Asher"
                                        style={{ height: "360px", objectFit: "contain", cursor: "pointer" }} />
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="card-body text-center p-2">
                                    <p style={{ fontSize: "1.2rem", color: "#4a4a4a", margin: 0 }}>Asher</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className="card" style={{ width: "200px", height: "420px" }}>
                            <a href="https://drive.google.com/file/d/1NInPswx-vNAervyraIHm3w8SncIDBjjb/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                <div className="img-overlay-wrapper" style={{ height: "360px" }}>
                                    <img src="../Sora.png" className="card-img-top fade-in-scroll" alt="Sora"
                                        style={{ height: "360px", objectFit: "contain", cursor: "pointer", transitionDelay: "0.2s" }} />
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="card-body text-center p-2">
                                    <p style={{ fontSize: "1.2rem", color: "#4a4a4a", margin: 0 }}>Sora</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-auto">
                        <div className="card" style={{ width: "200px", height: "420px" }}>
                            <a href="https://drive.google.com/file/d/14BncvOMwQNd1sd7WJ8VKyboANT69W-jw/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                                <div className="img-overlay-wrapper" style={{ height: "360px" }}>
                                    <img src="../frente Ossian (1).png" className="card-img-top fade-in-scroll" alt="Ossian"
                                        style={{ height: "360px", objectFit: "contain", cursor: "pointer", transitionDelay: "0.4s" }} />
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="card-body text-center p-2">
                                    <p style={{ fontSize: "1.2rem", color: "#4a4a4a", margin: 0 }}>Ossian</p>
                                </div>
                            </a>
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
                        <source src={video} type="video/webm" />
                    </video>
                </div>
                <div className="side-bar right" style={{ backgroundColor: "#005b15" }}></div>
            </div>

            <div className="my-5 p-4 rounded shadow-sm" style={{ backgroundColor: "#e8d3b7", width: "100%" }}>
                <h5 className="text-center mb-2 fw-bold" style={{ fontSize: "1.5rem", color: "#588d65" }}>
                    Instrucciones para el comic
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

            <div className="container my-5 p-4 border rounded shadow-sm"
                style={{ maxWidth: "900px" }}>
                <div className="row g-3">
                    <div style={{ position: "relative", width: "100%" }}>
                        <img
                            src="../portada-comic.gif"
                            alt="Portada del cómic"
                            style={{ width: "100%", display: "block", borderRadius: "8px" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.55)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "8px",
                            }}
                        >
                            <button
                                style={{
                                    padding: "12px 40px",
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    border: "2px solid #fff",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    letterSpacing: "1px",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#fff";
                                    e.target.style.color = "#000";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#fff";
                                }}
                            >
                                INICIAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer headerColor="bg-green" />

        </div>
    );
}