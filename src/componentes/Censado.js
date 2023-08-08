import { useDispatch } from "react-redux";
import { eliminarCensado } from "../features/censadosSlice";

const Censado = ({ id, nombre, ocupacion }) => {
  const dispatch=useDispatch();

  const eliminar = () => {
    console.log(id);
    fetch(`https://censo.develotion.com/personas.php?idCenso=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'apikey': localStorage.getItem("ApiKey"),
        'iduser': localStorage.getItem("UsuarioId")
      },
    })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        if(data.codigo===200){
          dispatch(eliminarCensado(id));
        }
      });
  }
  return (

    <tr>
      <th>{nombre} </th>
      <th><img src={`https://censo.develotion.com/imgs/${ocupacion}.png`} /> </th>
      <th><input type="button" onClick={eliminar} className="btn btn-dark btn2" value="x" /> </th>
    </tr>

  )
}

export default Censado

