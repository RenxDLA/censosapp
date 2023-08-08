import { useEffect } from "react";
import { useSelector } from "react-redux"

const ListaCensados = () => {
  const censados = useSelector(state => state.censados.censados);
  useEffect(() => {
    //console.log(censados[0], "censado 0")
  }, [])

  return (
    <div className="col">
      <h2>Censados</h2>
      <div>
        <p>{censados.length} </p>
        {/* {censados.map((c)=><p key={c.id}>{c.Nombre}</p> )} */}
      </div>
    </div>
  )
}

export default ListaCensados