import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deptos: []
}

export const deptosSlice = createSlice({
    name: "deptos",
    initialState,
    reducers: {
        seteardeptos: (state, action) => {
            state.deptos = action.payload;
        }
    }
})

export const { seteardeptos } = deptosSlice.actions;
export default deptosSlice.reducer;