import { baseUrl } from '@/components/utils/url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

    endpoints: (builder) => ({
        getFlights: builder.query({
            query: () => `/deal`,
        }),
        
    }),
})


export const { useGetFlightsQuery } = api;