import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Tienda = ({ headerColor, header2Color, mitad }) => {
  return (
    <div className="Header">
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
      />
      <div className="d-flex justify-content-end">
        <img className="img2 p-2" width="60" src="./image.png" alt="" />
      </div>
      <div className={`${mitad}`}>
      </div>
      <div className="p-4">
        <div className="container-sm">
          <div className="row">
            <div className="col-6 mb-3">
              <div className="card">
                <img src="../suculenta.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rosa suculenta</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="card">
                <img src="../dos.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Suculentas interior</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="card">
                <img src="interior.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Interior suculenta</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="card">
                <img src="../suculenta2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Suculenta</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="card">
                <img src="../captus.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Suculenta</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className="col-6 mb-3">
              <div className="card">
                <img src="../maceta morada.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Suculenta</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer
        headerColor="bg-green"
      />
    </div>
  )
}