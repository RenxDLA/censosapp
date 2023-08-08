import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "./Formulario";
import Analisis from "./Analisis";
import { useDispatch } from "react-redux";
import { seteardeptos } from "../features/deptosSlice";
import ListaCensados from "./ListaCensados";
import Totales from "./Totales";
import { setearCensados } from "../features/censadosSlice";
import { setearocupaciones } from "../features/ocupacionesSlice";

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
            //console.log(data);
            dispatch(seteardeptos(data.departamentos))
          }
        });

      fetch(`https://censo.develotion.com//personas.php?idUsuario=${idUsuario}`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'apikey': apiKey,
          'iduser': idUsuario
        },
      })
        .then(r => r.json())
        .then((data) => {
          //console.log("personasCensadas",data.personas);
          if (data.codigo === 200) {
            dispatch(setearCensados(data.personas))
          }
        });

      fetch(`https://censo.develotion.com/ocupaciones.php`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'apikey': apiKey,
          'iduser': idUsuario
        },
      })
        .then(r => r.json())
        .then((data) => {
          //console.log(data)
          if (data.codigo === 200) {
            dispatch(setearocupaciones(data.ocupaciones))
          }

        });

    }
  }, [])

  return (
    <div className="container-fluid ">
      <section className="row">
        <div className="col-lg-16" >
          <Analisis />
        </div>


        <div className="row row-cols-2 align-items-center">

          <div className="col">
            <div className="row row-cols-2 justify-content-around">

              <div className="prueba1 " > <Formulario /></div>
              <div className="prueba1" >  <ListaCensados /></div>
            </div>
          </div>

          <div className="row">
            <div className="col prueba">
              <Totales />
            </div>
          </div>
        </div>


      </section>
    </div>
  )
}

export default Dashboard