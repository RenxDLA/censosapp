import Graficas from "./Graficas"
import Mapa from "./Mapa"
import Porcentaje from "./Porcentaje"
import Tiempo from "./Tiempo"

const Analisis = () => {
    return (
        <div className="row">
            <h2>Analisis</h2>
            <p>Sección de analisis</p>
            <Graficas />
            <div className="col">
                <div className="row">
                    <Mapa />
                    <Porcentaje />
                </div>

                <Tiempo />
            </div>

        </div>
    )
}

export default Analisis