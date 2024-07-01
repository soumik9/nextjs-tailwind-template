import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ENUM_TAG_TYPES } from './tagTypes';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
        prepareHeaders: async (headers, { getState }) => {
            // @ts-ignore
            const token = getState()?.auth?.accessToken;
            token && headers.set("Authorization", `Bearer ${token}`)
            return headers;
        }
    }),
    tagTypes: [
        ...Object.values(ENUM_TAG_TYPES)
    ],
    endpoints: () => ({}),
})