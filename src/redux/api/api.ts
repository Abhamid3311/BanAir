import { baseUrl } from '@/components/utils/url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["users", "deals", "booking", "reviews"],

    endpoints: (builder) => ({

        //! Bookings
        getBooking: builder.query({
            query: () => `/bookings`,
            providesTags: ["booking"]
        }),

        getSingleBooking: builder.query({
            query: (id) => `/bookings/${id}`,
        }),

        addBooking: builder.mutation({
            query: (data) => ({
                url: "/bookings",
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["booking"]
        }),

        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["booking"]
        }),


        //! Reviews
        getReview: builder.query({
            query: () => "/testimonial",
            providesTags: ["reviews"]
        }),

        getSingleReview: builder.query({
            query: (id) => `/testimonial/${id}`,
        }),

        addReview: builder.mutation({
            query: (data) => ({
                url: "/testimonial",
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["reviews"]
        }),

        deleteReview: builder.mutation({
            query: (id) => ({
                url: `/testimonial/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["reviews"]
        }),



    }),
});


export const { useGetBookingQuery, useDeleteBookingMutation, useGetReviewQuery, useGetSingleReviewQuery, useDeleteReviewMutation, useGetSingleBookingQuery,useAddBookingMutation,useAddReviewMutation } = api;