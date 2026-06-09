
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home.jsx"
import { AboutUs } from "./pages/AboutUs.jsx"
import { Comic } from "./pages/Comic.jsx"
import { Productos } from "./pages/Productos.jsx"
import { Somos } from "./pages/Somos.jsx"
import { Tienda } from "./pages/Tienda.jsx"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </BrowserRouter>
  )
}
