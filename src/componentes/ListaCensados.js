import { useSelector } from "react-redux";
import Censado from "./Censado";
import { useEffect, useRef, useState } from "react";

const ListaCensados = () => {
  const slcO = useRef(null);

  const censados = useSelector(state => state.censados.censados);
  const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones);

  const [filtradas, setFiltradas] = useState([]);
  const [tipoFiltro, setTipoFiltro] = useState("todos");

  const filtrarCensados = () => {
    setTipoFiltro(slcO.current.value);

    //setCFiltrados(censados.filter(c => c.ocupacion === slcO.current.value));

  }

  useEffect(() => {
    //console.log("filtro y select:",estaFiltrado, slcO.current.value);
    const filtradas = tipoFiltro === "todos" ? censados : censados.filter(c => c.ocupacion === slcO.current.value);
    setFiltradas(filtradas);

  }, [censados, tipoFiltro])



  return (
    <div className="col">
      <h2>Censados</h2>
      <select className="form-select " defaultValue={"todos"} id="slcOcupaciones" onChange={filtrarCensados} ref={slcO}>
        <option value="todos" >Todos</option>
        {ocupaciones.map((o) => (<option key={o.id} value={o.id}>{o.ocupacion}</option>))}
      </select><br /><br />
      <div className="row">
        <table className="table table-striped-columns">
          <tbody>
            {filtradas.map((c) => < Censado key={c.id} {...c} />)}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ListaCensados