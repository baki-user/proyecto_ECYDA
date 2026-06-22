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
        <div className="row">

          <div className="col fade-in-scroll" style={{ transitionDelay: "0.1s" }}>
            <div className="card m-auto border-white" style={{ width: "25rem" }}>
              <img className="img4 ml-auto p-2 logo-hover fade-in-scroll mobile-center" width="320" height="360" src="./Valentina.jpeg" alt="" style={{ transitionDelay: "0.2s" }} />
              <div className="card-body">
                <p className="card-text d-flex text-start mobile-center-text" style={{ color: "#616161" }}>Valentina Atehortua Atehortua</p>
              </div>
              <div className="card-body">
                <p className="card-text d-flex justify-content-center text-start mobile-center-text" style={{ color: "#616161" }}>Soy Valentina, estoy encargada de los guiones, soy una persona muy sociable y risueña</p>
              </div>
            </div>
            <div className="col">
              <div className="m-auto border-white d-flex mobile-center" style={{ width: "23rem" }}>
                <img className="img4 m-auto" width="50" src="./redess.gif" alt="" />
                <div className="card-body d-flex flex-column justify-content-center">
                  <p className="card-text d-flex text-start mobile-center-text" style={{ color: "#616161" }}>valen_ateho</p>
                  <p className="card-text d-flex text-start mobile-center-text" style={{ color: "#616161" }}>+57 311 2896155</p>
                  <p className="card-text d-flex text-start mobile-center-text" style={{ color: "#616161" }}>vatehortua228@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col fade-in-scroll mt-4" style={{ transitionDelay: "0.3s" }}>
            <div className="card m-auto border-white" style={{ width: "23rem" }}>
              <img className="img4 m-auto p-2 logo-hover fade-in-scroll mobile-center" width="320" height="360" src="./Nicol.jpeg" alt="" style={{ transitionDelay: "0.4s" }} />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center mobile-center-text" style={{ color: "#616161" }}>Nicol Madera Cardona</p>
              </div>
              <div className="card-body">
                <p className="card-text d-flex justify-content-center text-center mobile-center-text" style={{ color: "#616161" }}>Soy Nicol encargada de programar, me gusta hablar y conocer nuevos lugares</p>
              </div>
            </div>
            <div className="col">
              <div className="m-auto border-white d-flex mobile-center" style={{ width: "23rem" }}>
                <img className="img4 m-auto" width="50" src="./redess.gif" alt="" />
                <div className="card-body d-flex flex-column justify-content-center">
                  <p className="card-text d-flex justify-content-center mobile-center-text" style={{ color: "#616161" }}>bourbaki_twenty_one_pilots</p>
                  <p className="card-text d-flex justify-content-center mobile-center-text" style={{ color: "#616161" }}>+57 320 7406079</p>
                  <p className="card-text d-flex justify-content-center mobile-center-text" style={{ color: "#616161" }}>nicolmaderamc123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col fade-in-scroll mt-4" style={{ transitionDelay: "0.5s" }}>
            <div className="card m-auto border-white" style={{ width: "23rem" }}>
              <img className="img4 ms-auto p-2 logo-hover fade-in-scroll mobile-center" width="335" src="./Keren.jpeg" alt="" style={{ transitionDelay: "0.6s" }} />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center mobile-center-text" style={{ color: "#616161" }}>Keren Caldera Benitez</p>
              </div>
              <div className="card-body">
                <p className="card-text d-flex justify-content-center mobile-center-text keren-desc text-end" style={{ color: "#616161" }}>Soy keren, me hago cargo de diseñar, me gusta mucho hablar y soy muy sociable</p>
              </div>
            </div>
            <div className="col">
              <div className="m-auto border-white d-flex mobile-center" style={{ width: "23rem" }}>
                <div className="card-body d-flex justify-content-end gap-3">
                  <div className="h justify-content-center d-flex flex-column">
                    <p className="card-text text-end mobile-center-text" style={{ color: "#616161" }}>Linsy_cb</p>
                    <p className="card-text text-end mobile-center-text" style={{ color: "#616161" }}>+57 311 3446262</p>
                    <p className="card-text text-end mobile-center-text" style={{ color: "#616161" }}>kerencaldera16@gmail.com</p>
                  </div>
                  <img className="img4" width="50" src="./redess.gif" alt="" />
                </div>
              </div>
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