import "./footer.css"

export const Footer = ({ headerColor }) => {
    return (
        <div className={`w-100 p-2 ${headerColor} text-white`}>
            <div className="row">
                <div className="col d-flex flex-column justify-content-center">
                    <div className="m-auto border-white d-flex" style={{ width: "23rem" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <p className="card-text d-flex justify-content-center nav-link">Lineas de atención</p>
                            <p className="card-text d-flex justify-content-center nav-link">CEL: 320 740 60 79</p>
                        </div>
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-center p-4">
                    <div className="m-auto border-white d-flex" style={{ width: "23rem" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <p className="card-text d-flex justify-content-center nav-link">ECYDA</p>
                            <p className="card-text d-flex justify-content-center nav-link">Horarios</p>
                            <p className="card-text d-flex justify-content-center nav-link">Lun - Sab: 7:00 A.M a 5:00 P.M</p>
                        </div>
                    </div>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <div className="m-auto border-white d-flex" style={{ width: "23rem" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <p className="card-text d-flex justify-content-center nav-link">Ubicación</p>
                            <p className="card-text d-flex justify-content-center nav-link">CLL 85b #33-09</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}