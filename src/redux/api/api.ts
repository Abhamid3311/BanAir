import { baseUrl } from '@/components/utils/url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["users", "deals", "booking"],

    endpoints: (builder) => ({
        getFlights: builder.query({
            query: () => `/deal`,
            providesTags: ["deals"]
        }),

        deleteDeals: builder.mutation({
            query: (id) => ({
                url: `/deal/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["deals"]
        }),

        getBooking: builder.query({
            query: () => `/bookings`,
            providesTags: ["booking"]
        }),

        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["booking"]
        }),



    }),
})


export const { useGetFlightsQuery, useDeleteDealsMutation, useGetBookingQuery, useDeleteBookingMutation } = api;