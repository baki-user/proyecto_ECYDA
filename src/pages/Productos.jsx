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
      <div className="div p-5 h-100" width="100">
        
      
      <div className="cuadro p-5 d-flex justify-content-center h-50" width="100">
        <div className="container">
          <p className="tex fw-bold position-relative m-5 p-5 m" style={{ color: "#616161"  }}>Bienvenido a la tienda de ECYDA, un espacio donde la creatividad y la innovación se unen para dar vida a mundos digitales únicos. Nos especializamos en el diseño y la venta de escenarios y personajes en 3D, creados con atención al detalle y pensados para enriquecer proyectos de videojuegos, animación, realidad virtual, contenido digital y narrativas interactivas. En ECYDA encontrarás recursos de alta calidad que te permitirán construir experiencias visuales impactantes, desarrollar historias memorables y materializar tus ideas en entornos tridimensionales.</p>
        </div>
      </div>
      </div>
      <section className="tarjetas container flex-column d-flex justify-content-center" >
        <p className="algunos d-flex justify-content-center p-4 fw-bold" style={{ color: "#616161"  }}>Algunos de nuestros productos</p>
        <div className="row">
          <div className="col p-2">
            <div className="card bg-transparent border-0 m-auto" style={{ width: "30rem" }}>
              <img className="img4 m-auto" width="420" src="./escenariovalentina.png" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center" style={{ color: "#616161"  }}>ESCENARIOS 3D</p>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card bg-transparent border-0 m-auto" style={{ width: "30rem" }}>
              <img className="img4 m-auto" width="440" src="./Recurso4.png" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center" style={{ color: "#616161"  }}>PERSONAJES 3D</p>
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
      <section className="p-4">
      </section>   
      <Footer
        headerColor="bg-green"
      />


    </>
  )
}
