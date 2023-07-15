


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://glamorex.vercel.app/admin"
export const adminGetApies = createApi({
    reducerPath: "adminGetApies",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {          
          const token = getState().auth.token;    
          if (token) {
            headers.set('authorization', `Bearer ${token}`);
          }    
          headers.set('Content-Type', 'application/json');    
          return headers;
        },
      }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (filterName) => `/users?filterName=${filterName ? filterName : "all_users"}`,
        }),
        getRequestedUsers: builder.query({
          query: () => "/seller-requests",
        }),
        getProducts: builder.query({
          query: (filterName) => `/products?status=${filterName ? filterName : "all_products"}`,
        }),
      
    })
})


export const {
    useGetUsersQuery,
    useGetRequestedUsersQuery,
    useGetProductsQuery,

} = adminGetApies