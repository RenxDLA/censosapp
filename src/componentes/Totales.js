import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Totales = () => {
    const [cMvdeo, setCMvdeo] = useState(0);
    const [cTotales, setCTotales] = useState(0);
    const [cResto, setCResto] = useState(0);
    const censados = useSelector(state => state.censados.censados);
    useEffect(() => {
        setCMvdeo(censados.filter(c => c.departamento === 3218).length);
        setCTotales(censados.length);
        setCResto(censados.length - censados.filter(c => c.departamento === 3218).length);
        //console.log(censados);
    }, [censados])

    return (
        <div className="container-fluid col">
            <h2>Totales censados</h2>
            <div className="row">
                <div className="col letr">
                    <p>Montevideo</p>
                    <p>{cMvdeo}</p>
                </div>
                <div className="col letr">
                    <p>Total</p>
                    <p>{cTotales}</p>
                </div>
                <div className="col letr">
                    <p>Resto</p>
                    <p>{cResto}</p>
                </div>
            </div>

        </div>
    )
}

export default Totales