import { api } from "@/redux/api/api";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/users`,
            providesTags: ["users"]
        }),

        addUser: builder.mutation({
            query: (data) => ({
                url: "/users",
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["users"]
        }),

        getSingleUsers: builder.query({
            query: (email) => `/user/${email}`,
        }),

        getSingleUsersById: builder.query({
            query: (id) => `/users/${id}`,
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["users"]
        }),

    })
});




export const { useGetUsersQuery, useGetSingleUsersQuery, useAddUserMutation, useDeleteUserMutation, useGetSingleUsersByIdQuery } = userApi;