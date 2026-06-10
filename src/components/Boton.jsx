import "../stylesheet/Header.css"
import "../stylesheet/Boton.css"
import { useNavigate } from "react-router-dom"

export const Boton = ({btncolor, fondob}) => {
    const navigate = useNavigate()

    return(
        <div className={` ${fondob}`} style={{minHeight: "200px"}}>
            <div className=" container text-center pb-2">
                <h1 className="text-center"style={{ color: "#7d7d7d" }}>Nuestro proyecto</h1>
                <p className="text-center"style={{ color: "#7d7d7d" }}>Tras una extensa investigacion encontramos que no se ha explorado del tema del calentamiento global y la industrializacion desde la perspectiva de una comic interactivo, debido a esto desde ECYDA desarollamos nuestro proyecto estrella, un comic digital interactivo.
                 Creemos que por medio de este llegaremos mas profundamente a las personas y tendremos una buena influencia en ellas, te invitamos a ver nuestro comic.</p>
                <button 
                    type="button" 
                    className="btn btn-lg px-5 py-3 fw-bold"
                    onClick={() => navigate("/comic")}
                    style={{ 
                        color: "white", 
                        backgroundColor: "#3e5f43",
                        fontSize: "1.2rem",
                        letterSpacing: "2px",
                        boxShadow: "0 4px 15px rgba(62, 95, 67, 0.5)",
                        border: "none"
                    }}
                >
                    IR AL COMIC
                </button>
            </div>
        </div>
    )
}