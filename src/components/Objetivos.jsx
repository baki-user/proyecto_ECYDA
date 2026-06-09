import "../stylesheet/Objetivos.css"
export const Objetivos = () => {
    return (
        <div className="container border-none">
            <div className="card text-center border-0">
                <div className="card-body">
                    <h5 className="card-title">OBJETIVO GENERAL</h5>
                    <p className="card-text">Explicar las causas y consecuencias del calentamiento global para generar conciencia e incentivar
                        acciones preventivas y correctivas en la población, por medio de una narrativa distópica que trata el tema
                        de la industrialización, materializada en un comic interactivo transmedia</p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="card col-8 col-lg-4 text-center mb-3 border-0  ">
                        <div className="card-body ">
                            <div className="d-flex align-items-center">
                                <img src="./number1.png" alt="Bootstrap" width="80" />
                             <h5 className="card-title">OBJETIVO ESPECIFICO</h5>
                            </div>
                            <p className="card-text">Investigar y analizar cómo el cambio climático afecta el medio ambiente y cómo están contribuyendo
                                negativamente las industrias y las personas en esto.</p>
                        </div>
                    </div>
                    <div className="card col-8 col-lg-4 text-center mb-3 border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <img src="./number2.png" alt="Bootstrap" width="80" />
                             <h5 className="card-title">OBJETIVO ESPECIFICO</h5>
                            </div>
                            <p className="card-text">Registrar y examinar, por medio de una encuesta, la opinión de la población acerca del fenómeno del
                                calentamiento global con el fin de establecer parámetros que permitan desarrollar la narrativa.</p>
                        </div>
                    </div>
                    <div className="card  col-8 col-lg-4 text-center mb-3 border-0">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <img src="./number3.png" alt="Bootstrap" width="80" />
                             <h5 className="card-title">OBJETIVO ESPECIFICO</h5>
                            </div>
                            <p className="card-text">Comparar diferentes referentes gráficos y textuales con narrativas postapocalípticas con el fin de
                                extraer similitudes e información relevante que permita desarrollar adecuadamente la investigación.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}