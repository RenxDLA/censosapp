import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ciudades: []
}

export const ciudadesSlice = createSlice({
    name: "ciudades",
    initialState,
    reducers: {
        setearciudades: (state, action) => {
            state.ciudades = action.payload;
        }
    }
})

export const { setearciudades } = ciudadesSlice.actions;
export default ciudadesSlice.reducer;