import "../stylesheet/Objetivos.css"
import { useEffect } from "react"

export const Objetivos = () => {
    const imgStyle = { flexShrink: 0, width: "60px", height: "60px", objectFit: "contain" }
    const headerStyle = { display: "flex", alignItems: "center", marginBottom: "12px", gap: "8px" }

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
        <div className="container border-none">
            <div className="card text-center border-0">
                <div className="card-body">
                    <h5 className="card-title mt-4 fade-in-scroll" style={{ color: "#5d9a64" }}>OBJETIVO GENERAL</h5>
                    <p className="card-text texto-centro fade-in-scroll" style={{ color: "#868686", transitionDelay: "0.2s" }}>
                        Explicar las causas y consecuencias del calentamiento global para generar conciencia e incentivar
                        acciones preventivas y correctivas en la población, por medio de una narrativa distópica que trata el tema
                        de la industrialización, materializada en un comic interactivo transmedia
                    </p>
                </div>
                <div className="row d-flex justify-content-center align-items-start mt-4 mb-4">

                    <div className="col-8 col-lg-4 mb-3 fade-in-scroll objetivo-1" style={{ transitionDelay: "0.1s" }}>
    <div style={headerStyle}>
        <h5 className="objetivo-titulo" style={{ color: "#5d9a64", margin: 0, flex: 1 }}>Primer Objetivo Específico</h5>
    </div>
    <p className="objetivo-texto" style={{ color: "#868686", margin: 0 }}>
        Investigar y analizar cómo el cambio climático afecta el medio ambiente y cómo están contribuyendo
        negativamente las industrias y las personas en esto.
    </p>
</div>

<div className="col-8 col-lg-4 mb-3 fade-in-scroll objetivo-2" style={{ transitionDelay: "0.3s" }}>
    <div style={headerStyle}>
        <h5 className="objetivo-titulo" style={{ color: "#5d9a64", margin: 0, flex: 1 }}>Segundo Objetivo Específico</h5>
    </div>
    <p className="objetivo-texto" style={{ color: "#868686", margin: 0 }}>
        Registrar y examinar, por medio de una encuesta, la opinión de la población acerca del fenómeno del
        calentamiento global con el fin de establecer parámetros que permitan desarrollar la narrativa.
    </p>
</div>

<div className="col-8 col-lg-4 mb-3 fade-in-scroll objetivo-3" style={{ transitionDelay: "0.5s" }}>
    <div style={headerStyle}>
        <h5 className="objetivo-titulo" style={{ color: "#5d9a64", margin: 0, flex: 1 }}>Tercer Objetivo Específico</h5>
    </div>
    <p className="objetivo-texto" style={{ color: "#868686", margin: 0 }}>
        Comparar diferentes referentes gráficos y textuales con narrativas postapocalípticas con el fin de
        extraer similitudes e información relevante que permita desarrollar adecuadamente la investigación.
    </p>
</div>

                </div>
            </div>
        </div>
    )
}