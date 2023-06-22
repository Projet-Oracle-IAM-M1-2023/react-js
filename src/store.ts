import { configureStore } from "@reduxjs/toolkit";
import { EmployeApi } from "./services/api/Employe/EmployeApi";

export const store = configureStore({
    reducer: {
        [EmployeApi.reducerPath]: EmployeApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        EmployeApi.middleware
    )
})