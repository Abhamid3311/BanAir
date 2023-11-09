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

        addPackage: builder.mutation({
            query: (data) => ({
                url: "/deal",
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["deals"]
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


export const { useGetFlightsQuery, useDeleteFlightsMutation, useGetSinglePackagesQuery, useAddPackageMutation } = packageApi;