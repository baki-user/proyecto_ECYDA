import "../stylesheet/Meaning.css"
export const Meaning = ({Filasbg}) => {
    return(
        <div>
            <div className={`container d-flex align-items-center ${Filasbg}`}>
                <img src="./Logo.png" alt="Bootstrap" />
                <p className="text-center fw-bold ">ECYDA es la combinación de tres palabras clave de nuestra marca, Eternety, Cycle y Danger, que se interpreta como “Eterno ciclo peligroso”.</p>
            </div>
        </div>
    )
}