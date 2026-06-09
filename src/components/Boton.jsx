import "../stylesheet/Header.css"
import "../stylesheet/Boton.css"
export const Boton = ({btncolor, fondob}) => {
    return(
        <div className={` ${fondob}`} style={{minHeight: "200px"}}>
            <div className=" container text-center pb-2">
                <h1>Nuestro proyecto</h1>
                <p>Tras una extensa investigacion encontramos que no se ha explorado del tema del calentamiento global y la industrializacion desde la perspectiva de una comic interactivo, debido a esto desde ECYDA desarollamos nuestro proyecto estrella, un comic digital interactivo.
                 Creemos que por medio de este llegaremos mas profundamente a las personas y tendremos una buena influencia en ellas, te invitamos a ver nuestro comic.</p>
                <button type="button" className={`btn text-$cyan-200 `}>IR AL COMIC</button>
            </div>
        </div>
    )
}