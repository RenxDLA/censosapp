import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setearciudades } from "../features/ciudadesSlice";
import { agregarCensado } from "../features/censadosSlice";

const Formulario = () => {
    const name = useRef(null);
    const slcDepto = useRef(null);
    const slcCity = useRef(null);
    const date = useRef(null);
    const slcO = useRef(null);

    const dispatch = useDispatch();

    const deptos = useSelector(state => state.deptos.deptos);
    const ciudades = useSelector(state => state.ciudades.ciudades)
    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)

    const [mayor, setMayor] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const agregarCenso = () => {
        const censo = {
            idUsuario: localStorage.getItem("UsuarioId"),
            nombre: name.current.value,
            departamento: parseInt(slcDepto.current.value),
            ciudad: parseInt(slcCity.current.value),
            fechaNacimiento: date.current.value,
            ocupacion: parseInt(slcO.current.value)
        };
        //console.log("censoAntes", censo);
        //hacer validaciones al objeto antes del fetch
        if (censo.nombre === "" || censo.departamento === "" || censo.ciudad === "" || censo.fechaNacimiento === "" || censo.ocupacion === "") {
            setMensaje("Por favor complete todos los campos");
        }
        else if (new Date(censo.fechaNacimiento) >= new Date()) {
            setMensaje("La fecha de nacimiento no puede ser posterior a hoy")
        }
        else {
            fetch('https://censo.develotion.com/personas.php', {
                method: 'POST',
                body: censo,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'apikey': localStorage.getItem("ApiKey"),
                    'iduser': localStorage.getItem("UsuarioId")
                },
            })
                .then(r => r.json())
                .then((data) => {
                    //console.log(data);
                    setMensaje(data.mensaje);
                    const nuevoCensado = { id: data.idCenso, ...censo }
                    //console.log("censoDesp",censo);
                    //console.log(nuevoCensado, "nuevo");
                    dispatch(agregarCensado(nuevoCensado));
                });
        }


    }

    const slcCiudad = () => {
        if (slcDepto.current.value !== "") {
            fetch(`https://censo.develotion.com//ciudades.php?idDepartamento=${slcDepto.current.value}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'apikey': localStorage.getItem("ApiKey"),
                    'iduser': localStorage.getItem("UsuarioId")
                },
            })
                .then(r => r.json())
                .then((data) => {
                    //console.log(data);
                    if (data.codigo === 200) {
                        dispatch(setearciudades(data.ciudades))
                    }
                });
        }

    }

    const slcOcupaciones = () => {
        //console.log(date.current.value, new Date());
        let fechaNac = new Date(date.current.value);
        let hoy = new Date();

        let diferencia = hoy.getFullYear() - fechaNac.getFullYear();
        //console.log(hoy.getDate())

        // Verificar si aun no paso el mes y día de la fecha de nacimiento en el año actual
        if (hoy.getMonth() < fechaNac.getMonth() || (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())) {
            diferencia--;
        }

        //console.log(diferencia);
        if (diferencia > 17) {
            setMayor(true);

        } else {
            //en caso de que primero se configure que sean mayores de edad y luego se vuelva a cambiar fecha
            setMayor(false)
        }
    }

    return (
        <div >
            <div>
                <h2>Agregar censo</h2>
            </div>
            <div className="formulario" id="formuAg">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="txtNombre" placeholder="Nombre completo del censado" ref={name} />
                    <label htmlFor="txtNombre">Nombre</label><br />
                </div>
                <div className="container-fluid d-flex">
                    <div>
                        <select className="form-select " defaultValue={""} onChange={slcCiudad} id="slcDepto" ref={slcDepto}>
                            <option value="" disabled hidden>Departamento</option>
                            {deptos.map((depto) => (<option key={depto.id} value={depto.id}>{depto.nombre}</option>))}
                        </select>

                    </div>
                    <div>
                        <select className="form-select " defaultValue={""} id="slcCity" ref={slcCity}>
                            <option value="" disabled hidden>Ciudad</option>
                            {ciudades.map((city) => (<option key={city.id} value={city.id}>{city.nombre}</option>))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="txtFecha">Fecha</label><br />
                    <input type="date" id="txtFecha" onChange={slcOcupaciones} ref={date} /><br />
                </div>
                <div>
                    <select className="form-select " defaultValue={""} id="slcOcupaciones" ref={slcO}>
                        <option value="" disabled hidden>Ocupación</option>
                        {mayor ? ocupaciones.map((o) => (<option key={o.id} value={o.id}>{o.ocupacion}</option>)) : <option key={5} value={5}>Estudiante</option>}
                    </select>
                </div>
                <div>
                    <input type="button" className="btn btn-success" value="Agregar" onClick={agregarCenso} />
                </div>
            </div>
            {mensaje}

        </div>
    )
}

export default Formulario