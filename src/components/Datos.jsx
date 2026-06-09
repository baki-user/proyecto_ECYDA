import "../stylesheet/Datos.css"
export const Datos = ({ focolor, focolor2 }) => {
    return (
        <div className="card"style={{ minWidth: "400px" }}>
            <div className= "container" >
                <h1 className="text-center">Datos curiosos sobre el calentamiento global</h1>
                <div className="row d-flex justify-content-center gap-3 gap-md-0">
                    <div className="col-8 col-lg-4" style={{minWidth: "200px"}}>
                        <div className={` card ${focolor}`}>
                            <div className="container d-flex justify-content-center mt-4" >
                                <img src="./tierra.png" alt="Bootstrap" width="100%"/>
                            </div>
                            <div className={`card-body ${focolor2}`}>
                                <p className="card-text text-center text-light">Los últimos 9 años han sido los más calurosos jamás registrados: Desde 2015, cada año ha estado entre los más calurosos desde que comenzaron los registros en 1880.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-lg-4" style={{minWidth: "200px"}}>
                        <div className={` card ${focolor}`}>
                            <div className="container d-flex justify-content-center mt-4">
                                <img src="./hielo.png" alt="Bootstrap" width="100%" />
                            </div>
                            <div className={`card-body ${focolor2}`}>
                                <p className="card-text text-center text-light ">Groenlandia y la Antártida están perdiendo hielo a una velocidad récord: Juntos, estos dos lugares pierden más de 400 mil millones de toneladas de hielo al año.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col-lg-4" style={{minWidth: "200px"}}>
                        <div className={` card ${focolor}`}>
                            <div className="container d-flex justify-content-center mt-4">
                                <img src="./arboles.png" alt="Bootstrap" width="100%" />
                            </div>
                            <div className={`card-body ${focolor2}`}>
                                <p className="card-text text-center text-light">Los desastres naturales son más intensos y frecuentes: El calentamiento global está haciendo que tormentas, incendios forestales, sequías y huracanes sean más destructivos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}