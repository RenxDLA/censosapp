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
        <div className="btnLog">
        {(localStorage.getItem("UsuarioId") && localStorage.getItem("ApiKey")) && <input type="button" className="btn btn-dark" value="Log Out" onClick={logout} />}
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default Cabezal