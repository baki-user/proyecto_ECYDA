import "../stylesheet/Barra.css"
export const Barra = ({bgIMG}) => {
    return (
        <div className={ `W-100 ${bgIMG}`} style={{ minHeight: "150px", position: "relative", width: "100vw" }}>
            <h5 className="text-center p-4 m-0" style={{ color: "#616161" }}>
                Somos una marca enfocada en desarrollar un proyecto multimedial transmedia para concienciar, entretener y enseñar acerca del calentamiento goblal y sus consecuencias.
            </h5>
        </div>
    )
}