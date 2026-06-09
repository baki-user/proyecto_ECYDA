import "../Components/Header.css"

export const Tienda = ({ headerColor, header2Color, mitad }) => {
  return (
    <div className="Header ">
      <nav class={`navbar navbar-expand-lg  ${headerColor}`} data-bs-theme="dark">
        <div class="container ">
          <a class="navbar-brand" href="#">
            <img src="./logo-blanco.png" alt="Bootstrap" width="60" height="50" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item navbar-light ">
                <a class="nav-link" href="#">Acerca de</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Comic interactivo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tienda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Quienes somos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`${mitad}`}>

      </div >
      <div className={`text-white text-center fs-5 ${header2Color} mt-3`}>Lo normal fue lo primero en morir</div>
      <div className="p-4"> 
      <div className="container-sm">
        <div className="row">
          <div className="col-6 mb-3">
            <div class="card">
              <img src="../suculenta.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Rosa suculenta</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>

              </div>
            </div>


          </div>

          <div className="col-6 mb-3">
            <div class="card" >
              <img src="../dos.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Suculentas interior</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>

              </div>
            </div>

          </div>

          <div className="col-6 mb-3">
            <div class="card" >
              <img src="interior.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Interior suculenta</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <col />
              </div>
            </div>

          </div>
          <div className="col-6 mb-3">

            <div class="card" >
              <img src="../suculenta2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Suculenta</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <col />
              </div>
            </div>
          </div>
           <div className="col-6 mb-3">

            <div class="card" >
              <img src="../captus.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Suculenta</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <col />
              </div>
            </div>
            
          </div>
            <div className="col-6 mb-3">

            <div class="card" >
              <img src="../maceta morada.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Suculenta</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <col />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
</div> 



  )
}
