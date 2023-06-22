import { configureStore } from "@reduxjs/toolkit";
import { EmployeApi } from "./services/api/Employe/EmployeApi";
import { JobApi } from "./services/api/Jobs/JobApi";

export const store = configureStore({
    reducer: {
        [EmployeApi.reducerPath]: EmployeApi.reducer,
        [JobApi.reducerPath]: JobApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        EmployeApi.middleware,
        JobApi.middleware
    )
})