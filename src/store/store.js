import {configureStore} from "@reduxjs/toolkit";
import censadosReducer from "../features/censadosSlice";
import deptosReducer from "../features/deptosSlice";
import ciudadesReducer from "../features/ciudadesSlice";
import ocupacionesReducer from "../features/ocupacionesSlice";


export const store = configureStore({
    //objeto con prop reducer
    reducer:{
        censados:censadosReducer,
        deptos:deptosReducer,
        ciudades:ciudadesReducer,
        ocupaciones:ocupacionesReducer
    }
})
