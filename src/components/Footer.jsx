import "./footer.css"

export const Footer = ({ headerColor }) => {
    return (
        <>
            <div className="container p-2 ">
                <div className={`navbar-expand-lg  ${headerColor}`} >
                    <div className="row container">
                        <div className="col d-flex flex-column justify-content-center">
                            <div className=" m-auto  border-white d-flex " style={{ width: "23rem" }}>
                                <div className="card-body d-flex flex-column justify-content-center">
                                    <p className="card-text d-flex justify-content-center nav-link">Lineas de atención</p>
                                    <p className="card-text d-flex justify-content-center nav-link">CEL: 320 740 60 79</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column justify-content-center p-4">
                            <div className=" m-auto  border-white d-flex" style={{ width: "23rem" }}>
                                <div className="card-body d-flex flex-column justify-content-center ">
                                    <p className="card-text d-flex justify-content-center nav-link" href="#">ECYDA</p>
                                    <p className="card-text d-flex justify-content-center nav-link" href="#">Horarios</p>
                                    <p className="card-text d-flex justify-content-center nav-link" href="#">Lun - Sab: 7:00 A.M a 5:00 P.M</p>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column justify-content-center">
                            <div className=" m-auto  border-white d-flex" style={{ width: "23rem" }}>
                                <div className="card-body d-flex flex-column justify-content-center">
                                    <p className="card-text d-flex justify-content-center nav-link" href="#">Ubicación</p>
                                    <p className="card-text d-flex justify-content-center nav-link" href="#">CLL 85b #33-09</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center p-2" width="100%">
                            <img className="" width="25%" src="./social.gif" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
