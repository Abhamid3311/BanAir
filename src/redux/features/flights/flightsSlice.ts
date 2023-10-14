import { createSlice } from '@reduxjs/toolkit'

export const flightsSlice = createSlice({
    name: 'flight',
    initialState: {
        value: 0,
    },
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = flightsSlice.actions

export default flightsSlice.reducer