import "../stylesheet/Tips.css"
export const Tips = ({fcolor, fcolor2}) => {
    return (
        <div className={`${fcolor}`} style={{minWidth: "400px"}}>
            <div className="container">
            <h1 className="text-center">Tips para reducir el daño ambiental</h1>
            <div className="row d-flex justify-content-center gap-3 gap-md-0">
                <div className="col-8 col-lg-4">
                    <div className="card">
                        <img src="./cora.png" alt="Bootstrap" />
                        <div className={`card-body ${fcolor2}`}>
                            <p className="card-text text-center">Planta árboles y cuida áreas verdes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-lg-4">
                    <div className="card">
                        <img src="./bolsa.png" alt="Bootstrap"  />
                        <div className={`card-body ${fcolor2}`}>
                            <p className="card-text text-center">Usa productos ecológicos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-lg-4">
                    <div className="card">
                        <img src="./auto.png" alt="Bootstrap" />
                        <div className={`card-body ${fcolor2}`}>
                            <p className="card-text text-center">Usa transporte sostenible.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}