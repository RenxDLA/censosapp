import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "./Formulario";
import Analisis from "./Analisis";
import { useDispatch } from "react-redux";
import { seteardeptos } from "../features/deptosSlice";

const Dashboard = () => {

  let navigate = useNavigate();
  let apiKey = localStorage.getItem("ApiKey");
  let idUsuario = localStorage.getItem("UsuarioId");
  const dispatch = useDispatch();

  //al renderizarse por primera vez chequea que haya un usuario logueado
  useEffect(() => {
    if (localStorage.getItem("UsuarioId") === null || localStorage.getItem("ApiKey") === null) navigate("/");
    else {
      fetch(`https://censo.develotion.com/departamentos.php`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'apikey': apiKey,
          'iduser': idUsuario
        },
      })
        .then(r => r.json())
        .then((data) => {
          if (data.codigo === 200) {
            dispatch(seteardeptos(data.departamentos))
          }
        });

    }
  }, [])

  return (
    <div>
      <h2>Dashboard</h2>
      <Analisis />
      <Formulario />
    </div>
  )
}

export default Dashboard