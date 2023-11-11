import { api } from "@/redux/api/api";

const packageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFlights: builder.query({
            query: () => `/deal`,
            providesTags: ["deals"]
        }),
        getSinglePackages: builder.query({
            query: (id) => `/deal/${id}`,
            providesTags: ["deals"]
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

        updatePackage: builder.mutation({
            query: ({ data, id }) => ({
                url: `/deal/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ["deals"]
        }),
    })
});


export const { useGetFlightsQuery, useDeleteFlightsMutation, useGetSinglePackagesQuery, useAddPackageMutation, useUpdatePackageMutation } = packageApi;