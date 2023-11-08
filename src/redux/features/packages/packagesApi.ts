import { api } from "@/redux/api/api";

const packageApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getFlights: builder.query({
            query: () => `/deal`,
            providesTags: ["deals"]
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


export const { useGetFlightsQuery, useDeleteFlightsMutation } = packageApi;