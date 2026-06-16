import "../stylesheet/Tips.css"
import { useEffect } from "react"

export const Tips = ({fcolor, fcolor2}) => {

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
        <div className={`${fcolor}`} style={{ minWidth: "400px" }}>
            <div className="container">
                <h1 className="text-center fade-in-scroll" style={{ color: "#9c8566" }}>
                    Tips para reducir el daño ambiental
                </h1>
                <div className="row d-flex justify-content-center gap-3 gap-md-0 mt-4">

                    <div className="col-8 col-lg-4 fade-in-scroll" style={{ transitionDelay: "0.1s" }}>
                        <div className="card">
                            <img src="./planta.png" alt="Bootstrap" />
                            <div className={`card-body ${fcolor2}`}>
                                <p className="card-text text-center" style={{ color: "#9a835d" }}>Planta árboles y cuida áreas verdes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-lg-4 fade-in-scroll" style={{ transitionDelay: "0.3s" }}>
                        <div className="card">
                            <img src="./productos.png" alt="Bootstrap" />
                            <div className={`card-body ${fcolor2}`}>
                                <p className="card-text text-center" style={{ color: "#9a835d" }}>Usa productos ecológicos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-lg-4 fade-in-scroll" style={{ transitionDelay: "0.5s" }}>
                        <div className="card">
                            <img src="./transporte_1.png" alt="Bootstrap" />
                            <div className={`card-body ${fcolor2}`}>
                                <p className="card-text text-center" style={{ color: "#9a835d" }}>Usa transporte sostenible.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}