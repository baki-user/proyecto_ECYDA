import "../stylesheet/InfoCard.css"
import { useEffect } from "react"

export const InfoCard = ({BgImg}) => {

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
        <div className={`container m-8 p-8 ${BgImg}`}>
            <div className="d-flex align-items-center flex-column mt-4">
                <img src="/Logo.png" alt="Bootstrap" className="logo-hover fade-in-scroll" />
                <h1 className="fixed-center mt-4 fade-in-scroll" style={{ color: "#616161", transitionDelay: "0.2s" }}>
                    El humo del progreso esta nublando nuestro futuro
                </h1>
            </div>
        </div>
    )
}