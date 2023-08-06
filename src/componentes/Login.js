import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const user = useRef(null);
  const pass = useRef(null);

  const [error, setError] = useState("");
  let navigate = useNavigate();

  //no permite ver el login a un usuario ya ingresado
  useEffect(() => {
    if (localStorage.getItem("UsuarioId") != null && localStorage.getItem("ApiKey") != null) navigate("/Dashboard");
  }, [])

  const [estadoBoton, setEstadoBoton] = useState(true);
  const campoActivo = () => {
    if (user.current.value !== "" && pass.current.value !== "") {
      setEstadoBoton(false);
    }

  }

  const ingresar = () => {
    let bodyLogin = {
      usuario: user.current.value,
      password: pass.current.value
    }
    fetch(`https://censo.develotion.com/login.php`, {
      method: 'POST',
      body: JSON.stringify(bodyLogin),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(r => r.json())
      .then((data) => {
        //console.log(data)
        if (data.codigo === 200) {
          localStorage.setItem("ApiKey", data.apiKey);
          localStorage.setItem("UsuarioId", data.id);
          navigate("/Dashboard")
        }
        else {
          localStorage.clear();
          setError(data.mensaje)
        }
      });



  }
  return (
    <div className="fondo">
      <h2>Login</h2>
      
      <p>¿Aún no tiene cuenta? <Link to="/Registro">Registrarme</Link></p>
      <div>
        <label htmlFor="txtUsuario">Usuario:</label>
        <input type="text" id="txtUsuario" onChange={campoActivo} ref={user} /><br />
        <label htmlFor="txtContraseña">Contraseña:</label>
        <input type="password" id="txtContraseña" onChange={campoActivo} ref={pass} /><br />
        <input type="button" value="Ingresar" disabled={estadoBoton} onClick={ingresar} />
        <p>{error}</p>
      </div>
    </div>
  )
}

export default Login