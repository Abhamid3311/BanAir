import { configureStore } from '@reduxjs/toolkit'
import flightsReducer from './features/packages/packagesSlice'
import { api } from './api/api';
import userReducer from './features/users/userSlice';

const store = configureStore({
    reducer: {
        flights: flightsReducer,
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;