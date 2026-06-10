import "../stylesheet/Cards.css"
export const Cards = ({bgImg, bgImg2, bgR}) => {
    return (
        <div className={`row m-4 p-2 ${bgR}`}>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                    <div className={`card-body ${bgImg}`} style={{ minHeight: "200px", position: "relative" }}>
                        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(70, 97, 70, 0.4)", borderRadius: "inherit" }}></div>
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <h5 className="card-title" style={{ color: "#f1f8f1" }}>¿POR QUE CREEAMOS LA MARCA?</h5>
                            <p className="card-text mt-4" style={{ color: "#f1f8f1" }}>Poco se ha explorado el tema del calentamiento global y sus consecuencias a través de comics interactivos con una narrativa distópica, es por esto que, decidimos crear este proyecto.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className={`card-body ${bgImg2}`} style={{ minHeight: "200px", position: "relative" }}>
                        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(70, 97, 70, 0.4)", borderRadius: "inherit" }}></div>
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <h5 className="card-title" style={{ color: "#f1f8f1" }}>¿QUE SON LAS NARRATIVAS DISTOPICAS?</h5>
                            <p className="card-text mt-4" style={{ color: "#f1f8f1" }}>Historias, a menudo de ciencia ficción, que presentan un futuro o sociedad alternativa, generalmente indeseable, caracterizada por la opresión, el control y la falta de libertad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}