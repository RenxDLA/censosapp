import Graficas from "./Graficas"
import Mapa from "./Mapa"
import Porcentaje from "./Porcentaje"

const Analisis = () => {
  return (
    <div>
        <h2>Analisis</h2>
        <p>Sección de analisis</p>
        <Graficas />
        <div>
            <Mapa />
            <Porcentaje />
        </div>
        
    </div>
  )
}

export default Analisis