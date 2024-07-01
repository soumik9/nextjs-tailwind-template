import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { ENUM_TAG_TYPES } from "../api/tagTypes";
import { ENUM_USER_STATUS } from "@/views/admin/user/utils/UserEnum";

// ?the main api url
const URL = 'user'

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *create user endpoint here
        createUser: builder.mutation({
            query: (data) => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.USERS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // *get all users with searching and filtering endpoint here
        getUsers: builder.query({
            query: ({ role, city, searchText }) => `${URL}?sortBy=createdAt&sortOrder=desc${role ? `&role.name=${role}` : ''}${city ? `&address.city=${city}` : ''}${searchText ? `&searchTerm=${searchText}` : ''}`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.USERS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    toast.error(error?.error?.data?.message);
                }
            }
        }),

        // *get users with role filtering only
        getUsersByRole: builder.query({
            query: ({ role }) => `${URL}?sortBy=createdAt&sortOrder=desc&role.name=${role}&status=${ENUM_USER_STATUS.ACTIVE}`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.USERS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    toast.error(error?.error?.data?.message);
                }
            }
        }),

        // *get a single user by id endpoint here
        getUser: builder.query({
            query: (userId) => `${URL}/${userId}`,
            providesTags: (result, error, arg) => [{
                type: ENUM_TAG_TYPES.USER, id: arg
            }],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

        // *updating user data by user id
        updateUser: builder.mutation({
            query: ({ userId, formData }) => ({
                url: `${URL}/update/${userId}`,
                method: 'PATCH',
                body: formData,
            }),
            invalidatesTags: (result, error, arg) => [
                ENUM_TAG_TYPES.USERS,
                { type: ENUM_TAG_TYPES.USER, id: arg.userId }
            ],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // *deleting user data by user id
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `${URL}/delete/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: [ENUM_TAG_TYPES.USERS],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

    })
});

export const {
    useCreateUserMutation,
    useGetUsersQuery,
    useGetUsersByRoleQuery,
    useGetUserQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;