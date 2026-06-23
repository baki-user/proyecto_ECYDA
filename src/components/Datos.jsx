import "../stylesheet/Datos.css"
import "../stylesheet/Objetivos.css"
import { useEffect } from "react"

export const Datos = ({ focolor, focolor2 }) => {

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
        <div className="card" style={{ minWidth: "400px" }}>
            <div className="container">
                <h1 className="text-center mt-4 fade-in-scroll" style={{ color: "#669c6c" }}>
                    Datos curiosos sobre el calentamiento global
                </h1>
                <div className="row d-flex justify-content-center gap-3 gap-md-0 mt-4">

                    <div className="col-8 col-lg-4 fade-in-scroll" style={{ minWidth: "200px", transitionDelay: "0.1s" }}>
                        <div className={`card ${focolor}`}>
                            <div className="container d-flex justify-content-center mt-4">
                                <div className="img-overlay-wrapper">
                                    <img src="./calor.png" alt="Bootstrap" width="100%" />
                                    <div className="img-overlay"></div>
                                </div>
                            </div>
                            <div className={`card-body ${focolor2}`}>
                                <p className="card-text text-start" style={{ color: "#ddffe2" }}>
                                    Los últimos 9 años han sido los más calurosos jamás registrados: Desde 2015, cada año ha estado entre los más calurosos desde que comenzaron los registros en 1880.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-lg-4 fade-in-scroll" style={{ minWidth: "200px", transitionDelay: "0.3s" }}>
                        <div className={`card ${focolor}`}>
                            <div className="container d-flex justify-content-center mt-4">
                                <div className="img-overlay-wrapper">
                                    <img src="./basura.png" alt="Bootstrap" width="100%" />
                                    <div className="img-overlay"></div>
                                </div>
                            </div>
                            <div className={`card-body ${focolor2}`}>
                                <p className="card-text text-center" style={{ color: "#ddffe2" }}>
                                    La basura es responsable de aproximadamente el 20 % de las emisiones de gas metano de origen humano. Cuando los desechos orgánicos se descomponen sin oxígeno en los vertederos, liberan este potente gas
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-lg-4 fade-in-scroll" style={{ minWidth: "200px", transitionDelay: "0.5s" }}>
                        <div className={`card ${focolor}`}>
                            <div className="container d-flex justify-content-center mt-4">
                                <div className="img-overlay-wrapper">
                                    <img src="./huracan.png" alt="Bootstrap" width="100%" />
                                    <div className="img-overlay"></div>
                                </div>
                            </div>
                            <div className={`card-body ${focolor2}`}>
                                <p className="card-text text-end" style={{ color: "#ddffe2" }}>
                                    Los desastres naturales son más intensos y frecuentes: El calentamiento global está haciendo que tormentas, incendios forestales, sequías y huracanes sean más destructivos.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}