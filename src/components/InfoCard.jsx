import "../stylesheet/InfoCard.css"

export const InfoCard = ({BgImg}) => {
     return(
      <div className={`container m-8 p-8 ${BgImg}`}>
        <div className="d-flex align-items-center flex-column mt-4">
         <img src="./Logo.png" alt="Bootstrap"/>
         <h1 className="fixed-center mt-4"style={{ color: "#616161" }}>El humo del progreso esta nublando nuestro futuro</h1>
        </div>
      </div>
     )
}