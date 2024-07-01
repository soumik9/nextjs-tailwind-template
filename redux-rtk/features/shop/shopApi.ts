import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { ENUM_TAG_TYPES } from "../api/tagTypes";

// ?the main api url
const URL = 'shop'

export const shopApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // *create shop endpoint here
        createShop: builder.mutation({
            query: (data) => ({
                url: `${URL}/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: [ENUM_TAG_TYPES.SHOPS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error: any) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // *get all shops with searching and filtering endpoint here
        getShops: builder.query({
            query: ({ status, searchText }) => `${URL}?sortBy=createdAt&sortOrder=desc${status ? `&status=${status}` : ''}${searchText ? `&searchTerm=${searchText}` : ''}`,
            keepUnusedDataFor: 600,
            providesTags: [ENUM_TAG_TYPES.SHOPS],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    toast.error(error?.error?.data?.message);
                }
            }
        }),

        // *get a single shop by id endpoint here
        getShop: builder.query({
            query: (shopId) => `${URL}/${shopId}`,
            providesTags: (result, error, arg) => [{
                type: ENUM_TAG_TYPES.SHOP, id: arg
            }],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error: any) {
                    console.log(error?.error?.data?.message);
                }
            }
        }),

    })
});

export const {
    useCreateShopMutation,
    useGetShopsQuery,
    useGetShopQuery,
} = shopApi;