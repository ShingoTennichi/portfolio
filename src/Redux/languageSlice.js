import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    languageState: true
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeToEnglish: (state) => {
            state.languageState = true;
        },
        changeToJapanese: (state) => {
            state.languageState = false;
        }
    }
})

export const { changeToEnglish, changeToJapanese } = languageSlice.actions;
export default languageSlice.reducer;