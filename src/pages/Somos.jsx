import "../components/somos.css"
import "../stylesheet/InfoCard.css"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { useEffect } from "react"

export const Somos = () => {

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
    <>
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
      />
      <div className="banner">
        <div className="ban position-relative p-4 h-100 d-flex justify-content-center">
          <p className="fw-bold fs-3 fade-in-scroll" style={{ color: "#2c592c" }}>Conocenos</p>
        </div>
      </div>
      <div className="container">
        <p className="texo text-center position-relative p-2 aling-items-center fade-in-scroll" style={{ color: "#616161", transitionDelay: "0.2s" }}>
          Somos aprendices de el tecnólogo de Producción en Contenidos Multimedia del Servicio Nacional de Aprendizaje (SENA), desarrollamos
          este proyecto desde nuestro primer trimestre enfocadas en el calentamiento global y la industrialización basadas en una narrativa distopica
        </p>
      </div>
      <section className="tarjetass container p-5">
        <div className="row justify-content-center">

          {/* Valentina */}
          <div className="col-12 col-md-4 fade-in-scroll mt-4 d-flex flex-column align-items-center" style={{ transitionDelay: "0.1s" }}>
            <div className="card border-white text-center w-100" style={{ maxWidth: "25rem" }}>
              <img className="m-auto p-2 logo-hover fade-in-scroll" style={{ maxWidth: "100%", width: "320px", height: "360px", objectFit: "cover", transitionDelay: "0.2s" }} src="./Valentina.png" alt="" />
              <div className="card-body">
                <p className="card-text" style={{ color: "#616161" }}>Valentina Atehortua Atehortua</p>
              </div>
              <div className="card-body">
                <p className="card-text text-start" style={{ color: "#616161" }}>Soy Valentina, estoy encargada de los guiones, soy una persona muy sociable y risueña</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2" style={{ maxWidth: "25rem", width: "100%" }}>
              <img width="50" src="./redess.gif" alt="" />
              <div className="card-body d-flex flex-column">
                <p className="card-text text-center" style={{ color: "#616161" }}>valen_ateho</p>
                <p className="card-text text-center" style={{ color: "#616161" }}>+57 311 2896155</p>
                <p className="card-text text-center" style={{ color: "#616161" }}>vatehortua228@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Nicol */}
          <div className="col-12 col-md-4 fade-in-scroll mt-4 d-flex flex-column align-items-center" style={{ transitionDelay: "0.3s" }}>
            <div className="card border-white text-center w-100" style={{ maxWidth: "23rem" }}>
              <img className="m-auto p-2 logo-hover fade-in-scroll" style={{ maxWidth: "100%", width: "320px", height: "360px", objectFit: "cover", transitionDelay: "0.4s" }} src="./nicol.jpg" alt="" />
              <div className="card-body">
                <p className="card-text" style={{ color: "#616161" }}>Nicol Madera Cardona</p>
              </div>
              <div className="card-body">
                <p className="card-text" style={{ color: "#616161" }}>Soy Nicol encargada de programar, me gusta hablar y conocer nuevos lugares</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2" style={{ maxWidth: "23rem", width: "100%" }}>
              <img width="50" src="./redess.gif" alt="" />
              <div className="card-body d-flex flex-column">
                <p className="card-text text-center" style={{ color: "#616161" }}>bourbaki_twenty_one_pilots</p>
                <p className="card-text text-center" style={{ color: "#616161" }}>+57 320 7406079</p>
                <p className="card-text text-center" style={{ color: "#616161" }}>nicolmaderamc123@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Keren */}
          <div className="col-12 col-md-4 fade-in-scroll mt-4 d-flex flex-column align-items-center" style={{ transitionDelay: "0.5s" }}>
            <div className="card border-white text-center w-100" style={{ maxWidth: "23rem" }}>
              <img className="m-auto p-2 logo-hover fade-in-scroll" style={{ maxWidth: "100%", width: "335px", transitionDelay: "0.6s" }} src="./Keren.png" alt="" />
              <div className="card-body">
                <p className="card-text" style={{ color: "#616161" }}>Keren Caldera Benitez</p>
              </div>
              <div className="card-body">
                <p className="card-text text-end" style={{ color: "#616161" }}>Soy keren, me hago cargo de diseñar, me gusta mucho hablar y soy muy sociable</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2" style={{ maxWidth: "23rem", width: "100%" }}>
              <div className="card-body d-flex flex-column">
                <p className="card-text text-center" style={{ color: "#616161" }}>Linsy_cb</p>
                <p className="card-text text-center" style={{ color: "#616161" }}>+57 311 3446262</p>
                <p className="card-text text-center" style={{ color: "#616161" }}>kerencaldera16@gmail.com</p>
              </div>
              <img width="50" src="./redess.gif" alt="" />
            </div>
          </div>

        </div>


      </section>

      <Footer
        headerColor="bg-green"
      />
    </>
  )
}