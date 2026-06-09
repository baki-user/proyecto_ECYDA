import "../stylesheet/InfoCard.css"

export const InfoCard = ({BgImg}) => {
     return(
      <div className={`container m-8 p-8 ${BgImg}`}>
        <div className="d-flex align-items-center flex-column">
         <img src="./Logo.png" alt="Bootstrap"/>
         <h1 className="fixed-center">El humo del progreso esta nublando nuestro futuro</h1>
        </div>
      </div>
     )
}