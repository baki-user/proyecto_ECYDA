import "../components/productos.css"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../stylesheet/InfoCard.css"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Productos = () => {

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
      <div className="banner position-relative">
        <div className="ban position-relative p-4 h-100 d-flex justify-content-center mt-4">
          <img className="img1 position-absolute p-2 fade-in-scroll" width="150" src="./circulo.gif" alt="" style={{ transitionDelay: "0.1s" }} />
          <img className="ban h-100 fade-in-scroll" width="60%" src="./banner.gif" alt="" style={{ transitionDelay: "0.2s" }} />
          <img className="img2 position-absolute p-1 fade-in-scroll" width="140" src="./circulo.gif" alt="" style={{ transitionDelay: "0.3s" }} />
        </div>
      </div>
      <div className="div p-5 h-100" width="100">
        <div className="cuadro p-5 d-flex justify-content-center h-50" width="100">
          <div className="container">
            <p className="tex fw-bold position-relative fade-in-scroll" style={{ color: "#616161", transitionDelay: "0.2s" }}>
              Bienvenido a la tienda de ECYDA, un espacio donde la creatividad y la innovación se unen para dar vida a mundos digitales únicos. Nos especializamos en el diseño y la venta de escenarios y personajes en 3D, creados con atención al detalle y pensados para enriquecer proyectos de videojuegos, animación, realidad virtual, contenido digital y narrativas interactivas. En ECYDA encontrarás recursos de alta calidad que te permitirán construir experiencias visuales impactantes, desarrollar historias memorables y materializar tus ideas en entornos tridimensionales.
            </p>
          </div>
        </div>
      </div>
      <section className=" mt-4tarjetas container flex-column d-flex justify-content-center">
        <p className="algunos d-flex justify-content-center p-4 fw-bold fade-in-scroll" style={{ color: "#616161" }}>
          Algunos de nuestros productos
        </p>
        <div className="row">
          <div className="col p-2 fade-in-scroll" style={{ transitionDelay: "0.1s" }}>
            <div className="card bg-transparent border-0 m-auto" style={{ width: "30rem" }}>
              <img className="img4 m-auto logo-hover fade-in-scroll" width="420" src="./escenariovalentina.png" alt="" style={{ transitionDelay: "0.2s" }} />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center" style={{ color: "#616161" }}>Escenarios 3D</p>
              </div>
            </div>
          </div>
          <div className="col p-2 fade-in-scroll" style={{ transitionDelay: "0.3s" }}>
            <div className="card bg-transparent border-0 m-auto" style={{ width: "30rem" }}>
              <img className="img4 m-auto logo-hover fade-in-scroll" width="440" src="./Recurso4.png" alt="" style={{ transitionDelay: "0.4s" }} />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center" style={{ color: "#616161" }}>Personajes 3D</p>
              </div>
            </div>
          </div>
        </div>

        <section className="p-4">
          <Link to="/tienda" style={{ textDecoration: "none" }}>
            <div className="categoria container fw-bold w-25 rounded-3 logo-hover fade-in-scroll" style={{ transitionDelay: "0.3s", cursor: "pointer" }}>
              <p className="d-flex justify-content-center h-100 align-items-center text-white fs-5">Tienda</p>
            </div>
          </Link>
        </section>
      </section>
      <section className="p-4">
      </section>
      <Footer
        headerColor="bg-green"
      />
    </>
  )
}