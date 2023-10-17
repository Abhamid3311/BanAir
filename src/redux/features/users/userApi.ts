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
    })
});




export const { useGetUsersQuery, useGetSingleUsersQuery, useAddUserMutation } = userApi;