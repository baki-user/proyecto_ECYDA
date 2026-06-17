import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../stylesheet/InfoCard.css"

const productos = [
  { id: 1, nombre: "Escenario 3D", precio: 31430, precioOriginal: 44900, descuento: 30, imagen: "../escenariovalentina.png" },
  { id: 2, nombre: "Personaje 3D", precio: 39900, imagen: "../asherblender.png" },
  { id: 3, nombre: "Escenario 3D", precio: 14900, imagen: "escenario keren.png" },
  { id: 4, nombre: "Personaje 3D", precio: 39900, imagen: "../0001.png" },
  { id: 5, nombre: "Escenario 3D", precio: 29900, imagen: "../escenariocuarto.png" },
]

const styles = {
  container: { padding: "2rem 3rem" },
  encabezado: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" },
  titulo: { fontSize: "1.5rem", fontWeight: 700, margin: 0 },
  tituloLight: { fontWeight: 400 },
  contador: { fontSize: "1rem", color: "#aaa", fontWeight: 400 },
  ordenar: { backgroundColor: "#f3f3f3", color: "#999", padding: "0.5rem 1.5rem", borderRadius: 4, cursor: "pointer", fontSize: "0.95rem" },
  chevron: { color: "#99e78b", fontWeight: "bold" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" },
  card: { position: "relative", background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: "1rem", display: "flex", flexDirection: "column" },
  badgeDescuento: { position: "absolute", top: 10, left: 10, backgroundColor: "#59b453", color: "#fff", fontWeight: 700, fontSize: "0.8rem", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 },
  iconoFavorito: { position: "absolute", top: 10, right: 10, background: "none", border: "none", fontSize: "1.3rem", color: "#bbb", cursor: "pointer", zIndex: 2, lineHeight: 1 },
  imagenWrap: { display: "flex", alignItems: "center", justifyContent: "center", height: 160, marginBottom: "0.75rem" },
  imagen: { maxHeight: "100%", maxWidth: "100%", objectFit: "contain" },
  badgeLlevatelo: { alignSelf: "flex-start", backgroundColor: "#cff3ba", color: "#71d075", border: "none", borderRadius: 999, padding: "0.3rem 0.9rem", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.6rem", cursor: "pointer" },
  nombre: { fontSize: "0.95rem", fontWeight: 600, color: "#222", marginBottom: "0.5rem", minHeight: "2.6em" },
  precios: { display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.8rem" },
  precioActual: { fontSize: "1.3rem", fontWeight: 700, color: "#111" },
  precioOriginal: { fontSize: "0.95rem", color: "#aaa", textDecoration: "line-through" },
  btnBolsa: { backgroundColor: "#6dbf73d1", color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem", fontWeight: 700, letterSpacing: "0.5px", cursor: "pointer" },
}

export const Tienda = ({ headerColor, header2Color, mitad }) => {
  const [carrito, setCarrito] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const [mostrarCarrito, setMostrarCarrito] = useState(false)

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto])
  }

  const comprarYa = (producto) => {
    agregarAlCarrito(producto)
    alert(`¡Compra realizada con éxito!\nProducto: ${producto.nombre}\nPrecio: $${producto.precio.toLocaleString()}`)
  }

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll(".fade-in-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="Header">
      <Header
        headerColor="bg-green"
        header2Color="bg-lightColor"
      />
      <div className="d-flex justify-content-end align-items-center gap-2">
        <button
          className="btn btn-link p-0 position-relative"
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          aria-label="Ver carrito"
        >
          <img className="img2 p-2 fade-in-scroll" width="60" src="./image.png" alt="Carrito" />
          {carrito.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carrito.length}
            </span>
          )}
        </button>
      </div>

      {mostrarCarrito && (
        <div className="container-sm mb-3">
          <div className="card p-3">
            <h6>Tu carrito</h6>
            {carrito.length === 0 ? (
              <p className="mb-0">No has añadido productos todavía.</p>
            ) : (
              <ul className="list-group list-group-flush">
                {carrito.map((item, i) => (
                  <li key={i} className="list-group-item d-flex justify-content-between">
                    <span>{item.nombre}</span>
                    <span>${item.precio.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <div className={`${mitad}`}></div>

      <div style={styles.container}>
        <div className="fade-in-scroll" style={styles.encabezado}>
          <h2 style={styles.titulo}>
            Todos <span style={styles.tituloLight}>Productos</span>{" "}
            <span style={styles.contador}>({productos.length} productos)</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {productos.map((producto, i) => (
            <div
              className="fade-in-scroll"
              style={{ ...styles.card, transitionDelay: `${i * 0.15}s` }}
              key={producto.id}
            >
              {producto.descuento && (
                <span style={styles.badgeDescuento}>-{producto.descuento}%</span>
              )}
              <button
                style={styles.iconoFavorito}
                onClick={() => toggleFavorito(producto.id)}
                aria-label="Favorito"
              >
                {favoritos.includes(producto.id) ? "♥" : "♡"}
              </button>

              <div style={styles.imagenWrap}>
                <img src={producto.imagen} alt={producto.nombre} style={styles.imagen} />
              </div>

              <button style={styles.badgeLlevatelo} onClick={() => comprarYa(producto)}>
                🛒 ¡Llévatelo ahora!
              </button>

              <h6 style={styles.nombre}>{producto.nombre}</h6>

              <div style={styles.precios}>
                <span style={styles.precioActual}>${producto.precio.toLocaleString()}</span>
                {producto.precioOriginal && (
                  <span style={styles.precioOriginal}>${producto.precioOriginal.toLocaleString()}</span>
                )}
              </div>

              <button style={styles.btnBolsa} onClick={() => agregarAlCarrito(producto)}>
                A MI BOLSA
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer
        headerColor="bg-green"
      />
    </div>
  )
}