import { api } from "@/redux/api/api";

const packageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFlights: builder.query({
            query: () => `/deal`,
            providesTags: ["deals"]
        }),
        getSinglePackages: builder.query({
            query: (id) => `/deal/${id}`,
        }),

        deleteFlights: builder.mutation({
            query: (id) => ({
                url: `/deal/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["deals"]
        }),
    })
});


export const { useGetFlightsQuery, useDeleteFlightsMutation,useGetSinglePackagesQuery } = packageApi;