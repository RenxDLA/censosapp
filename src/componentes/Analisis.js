import Graficas from "./Graficas"
import Mapa from "./Mapa"
import Porcentaje from "./Porcentaje"
import Tiempo from "./Tiempo"
import Totales from "./Totales";

const Analisis = () => {
    return (
        <div className="row">
            <h2>Analisis estadístico</h2>
            <Graficas />
            <div className="col">
                <div className="row">
                    <div className="row row-cols-2 align-items-center justify-content-center">
                        <div className="anali"> <Mapa /> </div>
                        <div className="anali"> <Porcentaje /> </div>
                    </div>
                </div>


                <div className="row">
                    <Tiempo />
                    <div className="col prueba">
                        <Totales />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Analisis

