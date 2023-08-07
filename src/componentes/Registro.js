import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const user = useRef(null);
  const pass = useRef(null);

  const [error, setError] = useState("");
  let navigate = useNavigate();

  //no permite ver el registro a un usuario ya ingresado
  useEffect(() => {
    if (localStorage.getItem("UsuarioId") != null && localStorage.getItem("ApiKey") != null) navigate("/Dashboard");
  }, [])

  const registrar = () => {
    let bodyRegis = {
      usuario: user.current.value,
      password: pass.current.value
    }
    if (bodyRegis.usuario === "" || bodyRegis.password === "") {
      setError("Por favor complete todos los campos");
    } else {
      fetch(`https://censo.develotion.com/usuarios.php`, {
        method: 'POST',
        body: JSON.stringify(bodyRegis),
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
        })
    }

  }
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center fondo">
      <h2>Registro</h2>
      <p>¿Ya tiene una cuenta? <Link to="/">Ingresar</Link></p>
      <div>
        <label htmlFor="txtUsuario">Usuario:</label>
        <input type="text" id="txtUsuario" ref={user} /><br />
        <label htmlFor="txtContraseña">Contraseña:</label>
        <input type="password" id="txtContraseña" ref={pass} /><br />
        <input type="button" value="Registrar" onClick={registrar} />
        <p>{error}</p>
      </div>
    </div>
  )
}

export default Registro