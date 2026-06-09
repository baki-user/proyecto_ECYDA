import "../stylesheet/Cards.css"
export const Cards = ({bgImg, bgImg2, bgR}) => {
    return (
        <div className={`row m-4 p-2 ${bgR}`}>
            <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card">
                    <div className={`card-body  ${bgImg}` } style={{minHeight: "200px"}}>
                        <h5 className="card-title">¿POR QUE CREEAMOS LA MARCA?</h5>
                        <p className="card-text">
                        Poco se ha explorado el tema del calentamiento global y sus consecuencias a través de comics interactivos con una narrativa distópica, es por esto que, decidimos crear este proyecto.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className={`card-body ${bgImg2}`} style={{minHeight: "200px"}}>
                        <h5 className="card-title --bs-success-text-emphasis$green-200">¿QUE SON LAS NARRATIVAS DISTOPICAS?</h5>
                        <p className="card-text">
                     Historias, a menudo de ciencia ficción, que presentan un futuro o sociedad alternativa, generalmente indeseable, caracterizada por la opresión, el control y la falta de libertad</p>
                    </div>
                </div>
            </div>
        </div>

    )
}