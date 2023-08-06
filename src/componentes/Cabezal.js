import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cabezal = () => {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/")
  }
  return (
    <>
      <div className="header">
        <h1>Aplicación de censos</h1>
        <p>Sección de cabezal</p>
        {(localStorage.getItem("UsuarioId") && localStorage.getItem("ApiKey")) && <input type="button" value="Log Out" onClick={logout} />}

      </div>
      <Outlet />
    </>

  )
}

export default Cabezal