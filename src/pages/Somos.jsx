import "../components/somos.css"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Somos = () => {
  return (
    <>
    <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
        
      />
      <div className="banner">
        <div className="ban position-relative p-4 h-100 d-flex justify-content-center">
        <img className="img5 p-4" width="120" src="./cuadro.gif" alt="" />
          <p className="fw-bold fs-3">CONOCENOS</p>
        <img className="img6 p-4" src="./cuadro.gif" alt="" />
        </div>
      </div>
        <div className="container">
          <p className="texo text-center position-relative p-2  aling-items-center ">Somos aprendices de el tecnólogo de Producción en Contenidos Multimedia del Servicio Nacional de Aprendizaje (SENA), desarrollamos 
            este proyecto desde nuestro primer trimestre enfocadas en el calentamiento global y la industrialización basadas en una narrativa distopica. </p>
        </div>
        <section className="tarjetass container p-5">
        <div className="row">
          <div className="col ">
            <div className="card m-auto  border-white" style={{ width: "25rem"}}>
              <img className="img4 m-auto" width="250" src="./valentina.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">VALENTINA ATEHORTUA ATEHORTUA</p>
              </div>
              <div className="card-body">
                <p className="card-text d-flex justify-content-center text-center">Soy Valentina, estoy encargada  de los guiones, soy una persona muy sociable y risueña.</p>
              </div>
            </div>
            <div className="col">
            <div className=" m-auto  border-white d-flex" style={{ width: "23rem"}}>
              <img className="img4 m-auto" width="50" src="./redess.gif" alt="" />
              <div className="card-body d-flex flex-column justify-content-center">
                <p className="card-text d-flex justify-content-center">vatehortua228@gmail.com</p>
                <p className="card-text d-flex justify-content-center">valen_ateho</p>
                <p className="card-text d-flex justify-content-center">+57 311 2896155</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col">
            <div className="card m-auto  border-white" style={{ width: "23rem"}}>
              <img className="img4 m-auto p-2" width="260" src="./nicol.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">NICOL MADERA CARDONA</p>
              </div>
              <div className="card-body">
                <p className="card-text d-flex justify-content-center text-center">Soy Nicol encargada de programar, soy sociable, me gusta hablar y conocer nuevos lugares.</p>
              </div>
            </div>
            <div className="col">
            <div className=" m-auto  border-white d-flex" style={{ width: "23rem"}}>
              <img className="img4 m-auto" width="50" src="./redess.gif" alt="" />
              <div className="card-body d-flex flex-column justify-content-center">
                <p className="card-text d-flex justify-content-center">nicolmaderamc123@gmail.com</p>
                <p className="card-text d-flex justify-content-center">bourbaki_twenty_one_pilots</p>
                <p className="card-text d-flex justify-content-center">+57 320 7406079</p>
              </div>
            </div>
          </div>
          </div>
          <div className="col">
            <div className="card m-auto  border-white" style={{ width: "23rem"}}>
              <img className="img4 m-auto p-2" width="260" src="./keren.gif" alt="" />
              <div className="card-body">
                <p className="card-text d-flex justify-content-center">KEREN CALDERA BENITEZ</p>
              </div>
              <div className="card-body">
                <p className="card-text d-flex justify-content-center text-center">Soy keren,me hago cargo de diseñar, me gusta mucho hablar y soy muy sociable.</p>
              </div>
            </div>
            <div className="col">
            <div className=" m-auto  border-white d-flex" style={{ width: "23rem"}}>
              <img className="img4 m-auto" width="50" src="./redess.gif" alt="" />
              <div className="card-body d-flex flex-column justify-content-center">
                <p className="card-text d-flex justify-content-center">kerencaldera16@gmail.com</p>
                <p className="card-text d-flex justify-content-center">Linsy_cb</p>
                <p className="card-text d-flex justify-content-center">+57 311 3446262</p>
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
