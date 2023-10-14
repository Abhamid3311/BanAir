import { configureStore } from '@reduxjs/toolkit'
import flightsReducer from './features/flights/flightsSlice'
import { api } from './api/api';

const store = configureStore({
    reducer: {
        flights: flightsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;