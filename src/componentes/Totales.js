import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Totales = () => {
    const [cMvdeo, setCMvdeo] = useState(0);
    const [cTotales, setCTotales] = useState(0);
    const [cResto, setCResto] = useState(0);
    const censados = useSelector( state => state.censados.censados);
    useEffect(() => {
        setCMvdeo(censados.filter(c=>c.departamento===3218).length);
        setCTotales(censados.length);
        setCResto(cTotales-cMvdeo);
    }, [censados])
    
    return (
        <div className="container-fluid col"> 
            <h2>Totales censados</h2>
            <div className="row">
                <div className="col">
                    <h4>Montevideo</h4>
                    <p>{cMvdeo}</p>
                </div>
                <div className="col">
                    <h4>Total</h4>
                    <p>{cTotales}</p>
                </div>
                <div className="col">
                    <h4>Resto</h4>
                    <p>{cResto}</p>
                </div>
            </div>

        </div>
    )
}

export default Totales