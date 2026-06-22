import "../stylesheet/Meaning.css"
import "../stylesheet/InfoCard.css"
import { useEffect } from "react"

export const Meaning = ({Filasbg}) => {

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

    return(
        <div>
           <div className={`container d-flex align-items-center flex-column ${Filasbg}`}>
                <img src="./Logo.png" alt="Bootstrap" className="logo-hover fade-in-scroll" />
                <p className="text-center fw-bold fs-4 fade-in-scroll mt-4" style={{ color: "#284f2e", transitionDelay: "0.2s" }}>
                    ECYDA es la combinación de tres palabras clave de nuestra marca, Eternety, Cycle y Danger, que se interpreta como "Eterno ciclo peligroso"
                </p>
            </div>
        </div>
    )
}