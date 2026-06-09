
import { Header } from "../components/Header.jsx"
import { InfoCard } from "../components/InfoCard.jsx"
import { Cards } from "../components/Cards.jsx"
import { Barra } from "../components/Barra.jsx"
import { Tips } from "../components/Tips.jsx"
import { Datos } from "../components/Datos.jsx"
import { Boton } from "../components/Boton.jsx"
import { Header2 } from "../components/Header2.jsx"
import { Meaning } from "../components/Meaning.jsx"
import { Valores } from "../components/Valores.jsx"
import { Objetivos } from "../components/Objetivos.jsx"
import { Footer } from "../components/Footer.jsx"


export const AboutUs = () => {
    return (
        <>
            <Header
                headerColor="bg-green"
            />
            <Meaning
                Filasbg="bgIma"
            />
            <Valores
                Fondo="fondoval"
                Fondo2="fondoval2"
                Fondo3="fondoval3"
                Fondo4="fondoval4"
            />
            <Objetivos
            />
            <Footer
                headerColor="bg-green"
            />
        </>
    )
}
