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

    <li className="row-3 list-group-item">
      {nombre} 
      <img src={`https://censo.develotion.com/imgs/${ocupacion}.png`} /> 
      <input type="button" onClick={eliminar} className="btn btn-dark btn2" value="x" /> 
    </li>

  )
}

export default Censado

