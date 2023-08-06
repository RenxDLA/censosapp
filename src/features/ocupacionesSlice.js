import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ocupaciones: []
}

export const ocupacionesSlice = createSlice({
    name: "ocupaciones",
    initialState,
    reducers: {
        setearocupaciones: (state, action) => {
            state.ocupaciones = action.payload;
        }
    }
})

export const { setearocupaciones } = ocupacionesSlice.actions;
export default ocupacionesSlice.reducer;