import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setearciudades } from "../features/ciudadesSlice";

const Formulario = () => {
    const name = useRef(null);
    const date = useRef(null);
    const slc = useRef(null);
    const dispatch = useDispatch();
    const deptos = useSelector(state => state.deptos.deptos);
    const ciudades = useSelector(state => state.ciudades.ciudades)
    const slcCiudad = () => {
        console.log(slc.current.value);
        if (slc.current.value !== "") {
            fetch(`https://censo.develotion.com//ciudades.php?idDepartamento=${slc.current.value}`, {
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
    return (
        <div>
            <div>
                <h2>Agregar censo</h2>
            </div>
            <div className="formulario">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="txtNombre" placeholder="Nombre completo del censado" ref={name} />
                    <label htmlFor="txtNombre">Nombre</label><br />
                </div>
                <div className="container-fluid d-flex">
                    <div>
                        <select className="form-select " defaultValue={""} onChange={slcCiudad} id="slcDepto" ref={slc}>
                            <option value="" disabled hidden>Departamento</option>
                            {deptos.map((depto) => (<option key={depto.id} value={depto.id}>{depto.nombre}</option>))}
                        </select>

                    </div>
                    <div>
                        <select className="form-select " defaultValue={""} id="slcCity">
                            <option value="" disabled hidden>Ciudad</option>
                            {ciudades.map((city) => (<option key={city.id} value={city.id}>{city.nombre}</option>))}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="txtFecha">Fecha</label><br />
                    <input type="date" id="txtFecha" ref={date} /><br />
                </div>
            </div>

        </div>
    )
}

export default Formulario