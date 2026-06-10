import "../components/productos.css"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Productos = () => {
  return (
    <>
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
      />
      <div className="d-flex justify-content-end">
        <img className="img2 p-2 " width="60" src="./image.png" alt="" />
      </div>
      <div className="banner position-relative">
        <div className="ban position-relative p-4 h-100 d-flex justify-content-center">
        <img className="img1 position-absolute p-2" width="150" src="./circulo.gif" alt="" />
          <img className="ban h-100 " width="60%" src="./banner.gif" alt="" />
        <img className="img2 position-absolute p-1" width="140" src="./circulo.gif" alt="" />
        </div>
      </div>

      <div className="cuadro p-5 d-flex justify-content-center h-100" width="100">
        <div className="container">
          <p className="tex position-relative m-5 p-5 m">Bienvenido a la tienda de ECYDA, tu espacio digital para descubrir productos unicos, seleccionados con oasion y pensados para ti. Aqui,
            la calidad se encuentra con la comodidad de comprar desde donde estes. Explora, elige y deja que lo mejor llegue a tu puerta. k </p>
        </div>
      </div>
      <section className="tarjetas container flex-column d-flex justify-content-center" >
        <p className="algunos d-flex justify-content-center p-4 fw-bold">Algunos de nuestros productos</p>
        <div className="row">
          <div className="col p-2">
            <div className="card m-auto" style={{ width: "30rem" }}>
              <img className="img4 m-auto" width="190" src="./mata.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Macetas</p>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card m-auto" style={{ width: "30rem" }}>
              <img className="img4 m-auto" width="190" src="./porcelana1.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Porcelana</p>
              </div>
            </div>

          </div>
        </div>
        <section className="p-4">
        <div className="categoria container fw-bold  rounded-3">
          <p className="d-flex justify-content-center h-100 align-items-center text-white fs-5">TIENDA</p>
        </div>
      </section>
      </section>
  
      <section className="tarjeta container p-3">
        <div className="row">
          <div className="col p-1">
            <div className="card m-auto bg-primary-subtle text-primary-emphasis" style={{ width: "30rem"}}>
              <img className="img4 m-auto p-3" width="280" src="./133179.jpg" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Macetas</p>
              </div>
            </div>
          </div>
          <div className="col p-1">
            <div className="card m-auto bg-primary-subtle text-primary-emphasis" style={{ width: "30rem"}}>
              <img className="img4 m-auto p-3" width="320" src="./porce.jpg" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">Porcelana</p>
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
