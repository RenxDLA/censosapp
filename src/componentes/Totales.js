import { useEffect } from "react";
import { useSelector } from "react-redux";

const Totales = () => {
    
    const censados = useSelector( state => state.censados.censados);
    useEffect(() => {

    }, [censados])
    
    return (
        <div className="container-fluid col"> 
            <h2>Totales censados</h2>
            <div className="row">
                <div className="col">
                    <h4>Montevideo</h4>
                    <p>{censados.filter(c=>c.departamento===3218).length}</p>
                </div>
                <div className="col">
                    <h4>Total</h4>
                    <p>{censados.length}</p>
                </div>
                <div className="col">
                    <h4>Resto</h4>
                    <p>{censados.length - censados.filter(c=>c.departamento===3218).length}</p>
                </div>
            </div>

        </div>
    )
}

export default Totales