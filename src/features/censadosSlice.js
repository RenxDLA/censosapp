import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    censados: []
}

export const censadosSlice = createSlice({
    name: "censados",
    initialState,
    reducers: {
        setearCensados: (state, action) => {
            state.censados = action.payload;
        },
        agregarCensado : (state, action) =>{
            state.censados.push(action.payload);
        }   

    }
})

export const { setearCensados, agregarCensado } = censadosSlice.actions;
export default censadosSlice.reducer;