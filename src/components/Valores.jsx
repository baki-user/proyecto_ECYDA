import "../stylesheet/Valores.css"
export const Valores = ({Fondo,Fondo2,Fondo3, Fondo4}) => {
    return (
        <div>
            <div className="container text-center mt-4 d-flex flex-column gap-2">
                <h2>VALORES DE MARCA</h2>
                <div className={`card ${Fondo}`}>
                    <div className="card-body">
                        SOSTENIBILIDAD
                        <div className="bi bi-caret-down-fill "></div>
                    </div>
                </div>
                <div className={`card ${Fondo2}`}>
                    <div className="card-body">
                        TRANSPARENCIA
                        <div className="bi bi-caret-down-fill "></div>
                    </div>
                </div>
                <div className={`card ${Fondo3}`}>
                    <div className="card-body">
                        INNOVACIÓN VERDE
                        <div className="bi bi-caret-down-fill "></div>
                    </div>
                </div>
                <div className={`card ${Fondo4}`}>
                    <div className="card-body">
                        RESPONSABILIDAD
                        <div className="bi bi-caret-down-fill "></div>
                    </div>
                </div>
            </div>
        </div>
    )
}