import { useState, useEffect } from "react"
import "../stylesheet/Valores.css"

const valores = [
    {
        titulo: "SOSTENIBILIDAD",
        fondo: "Fondo",
        texto: "Compromiso con la protección y conservación del medio ambiente mediante la promoción de prácticas responsables que permitan satisfacer las necesidades actuales sin comprometer los recursos y oportunidades de las futuras generaciones."
    },
    {
        titulo: "TRANSPARENCIA",
        fondo: "Fondo2",
        texto: "Principio que promueve la comunicación clara, honesta y basada en información verificable sobre las causas, consecuencias y posibles soluciones al calentamiento global, facilitando la comprensión y la toma de decisiones informadas por parte de la comunidad."
    },
    {
        titulo: "INNOVACIÓN VERDE",
        fondo: "Fondo3",
        texto: "Capacidad de desarrollar y aplicar ideas, herramientas y estrategias creativas que contribuyan a la reducción del impacto ambiental, fomentando alternativas sostenibles y nuevas formas de sensibilizar a la población sobre los desafíos climáticos."
    },
    {
        titulo: "RESPONSABILIDAD",
        fondo: "Fondo4",
        texto: "Compromiso individual y colectivo de reconocer el impacto de nuestras acciones sobre el medio ambiente y actuar de manera consciente para reducir los efectos del cambio climático, promoviendo conductas que favorezcan el bienestar social y ecológico."
    }
]

export const Valores = ({ Fondo, Fondo2, Fondo3, Fondo4 }) => {
    const fondos = [Fondo, Fondo2, Fondo3, Fondo4]
    const [abierto, setAbierto] = useState(null)

    const toggle = (i) => setAbierto(abierto === i ? null : i)

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
        <div>
            <h2 className="text-center mt-4 fade-in-scroll" style={{ color: "#7e7e7e" }}>VALORES DE MARCA</h2>
            <div className="w-100 text-center d-flex flex-column gap-2 mt-2">
                {valores.map((v, i) => (
                    <div
                        key={i}
                        className={`card rounded-0 ${fondos[i]} fade-in-scroll`}
                        style={{ transitionDelay: `${i * 0.15}s` }}
                    >
                        <div className="card-body"style={{ color: "#584014" }}>
                            <div>{v.titulo}</div>
                            <div
                                className={`bi bi-caret-down-fill valor-flecha ${abierto === i ? "rotada" : ""}`}
                                onClick={() => toggle(i)}
                                style={{ cursor: "pointer" }}
                            ></div>
                        </div>
                        <div className={`valor-desplegable ${abierto === i ? "abierto" : ""}`}>
                            <p className="p-3 mb-0"style={{ color: "#4c3c18" }}>
                                {v.emoji} {v.texto}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}